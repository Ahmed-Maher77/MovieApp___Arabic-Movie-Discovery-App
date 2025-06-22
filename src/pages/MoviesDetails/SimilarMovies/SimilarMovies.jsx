import PropTypes from "prop-types";
import { useState } from "react";
import Loader from "../../../components/Loader/Loader";
import Section_Heading from "../../../components/Section_Heading/Section_Heading";
import SimilarMovies_List from "./SimilarMovies_List";
import "./SimilarMovies.css";

const SimilarMovies = ({ data, isLoading, error, comingFrom }) => {
    const [visibleCount, setVisibleCount] = useState(5);
    const itemsPerLoad = 5;

    // Loading State
    if (isLoading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "230px" }}
            >
                <Loader title="...Loading Similar Movies" />
            </div>
        );
    }

    // Error Handling
    if (error || !data) {
        return (
            <div className="text-center my-5">
                <h2>Something went wrong</h2>
                <span className="red-color">
                    {error || "Failed to fetch Similar Movies."}
                </span>
            </div>
        );
    }

    // Limit data to show only visible items
    const limitedData = {
        ...data,
        results: data.results.slice(0, visibleCount)
    };

    const handleShowMore = () => {
        setVisibleCount(prev => Math.min(prev + itemsPerLoad, data.results.length));
    };

    const handleShowLess = () => {
        setVisibleCount(5);
    };

    const hasMoreItems = visibleCount < data.results.length;
    const hasHiddenItems = visibleCount > 5;

    return (
        <div className="Similar-Movies">
            <Section_Heading title="تفضيلات مشابهه" text="استمتع بمشاهدة أفلام مشابهة بناءً على تفضيلاتك!" customStyle="mt-5" />
                
            <SimilarMovies_List data={limitedData} comingFrom={comingFrom} />
            
            {data.results.length > 5 && (
                <div className="text-center">
                    {hasMoreItems ? (
                        <button 
                            className="btn btn-outline-primary see-more-btn"
                            onClick={handleShowMore}
                        >
                            عرض المزيد ({Math.min(itemsPerLoad, data.results.length - visibleCount)} أفلام إضافية)
                        </button>
                    ) : hasHiddenItems ? (
                        <button 
                            className="btn btn-outline-secondary see-less-btn"
                            onClick={handleShowLess}
                        >
                            عرض أقل
                        </button>
                    ) : null}
                </div>
            )}
        </div>
    );
};

export default SimilarMovies;

SimilarMovies.propTypes = {
    data: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    comingFrom: PropTypes.string.isRequired
};

