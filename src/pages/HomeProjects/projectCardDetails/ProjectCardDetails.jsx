import { Link, useLoaderData } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProjectCardDetails = () => {
    const project = useLoaderData(); // ✅ Get single project data from loader

    if (!project) {
        return (
            <div className="text-center py-20 text-gray-600 text-xl">
                Project not found 😢
            </div>
        );
    }

    const {
        title,
        // description,
        allImages,
        headVideo,
        technologyUsed,
        liveLink,
        projectCategory,
        sharesCount,
        likesCount,
        overview,
        problem,
        goals,
        keyFeatures,
        process,
        results,
    } = project;

    // ✅ Prepare media items (YouTube + Images)
    const mediaItems = [
        headVideo
            ? {
                original: "youtube",
                thumbnail: `https://img.youtube.com/vi/${headVideo
                    .split("v=")[1]
                    ?.split("?")[0] || "dQw4w9WgXcQ"}/0.jpg`,
                embedUrl: headVideo.replace("watch?v=", "embed/"),
            }
            : null,
        ...(allImages?.map((img) => ({
            original: img,
            thumbnail: img,
        })) || []),
    ].filter(Boolean);

    // ✅ Custom render for YouTube or image
    const renderItem = (item) => {
        if (item.original === "youtube") {
            return (
                <div className="w-full h-[500px] md:h-[600px] flex justify-center items-center bg-black">
                    <iframe
                        width="100%"
                        height="100%"
                        src={item.embedUrl}
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            );
        }

        return (
            <div className="w-full h-[500px] md:h-[600px]">
                <img src={item.original} alt="" className="w-full h-full object-cover" />
            </div>
        );
    };

    return (
        <section className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 pb-20">
            {/* Header */}
            <div className="max-w-6xl mx-auto py-10 px-5 md:px-20 bg-gradient-to-b from-[#dcd3ff] via-[#eae5ff] to-white rounded-b-3xl shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">
                            <Link to="/projectAll" className="hover:text-violet-600 transition-colors">
                                ← Back to Projects
                            </Link>
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
                    </div>
                    <div className="text-sm space-y-1 text-gray-700">
                        <p><span className="font-semibold">Category:</span> {projectCategory}</p>
                        <p><span className="font-semibold">Shares:</span> {sharesCount}</p>
                        <p><span className="font-semibold">Likes:</span> {likesCount}</p>
                    </div>
                </div>
            </div>

            {/* Image & Video Gallery */}
            <div className="max-w-6xl mx-auto px-5 md:px-20 mt-10 mb-16">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <ImageGallery
                        items={mediaItems}
                        showPlayButton={false}
                        showFullscreenButton={true}
                        showNav={true}
                        lazyLoad={true}
                        slideDuration={450}
                        thumbnailPosition="bottom"
                        showIndex={true}
                        renderItem={renderItem}
                    />
                </div>
            </div>

            {/* Overview */}
            {overview && (
                <div className="max-w-6xl mx-auto px-5 md:px-20 mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Overview</h2>
                    <p className="text-gray-700 leading-relaxed">{overview}</p>
                </div>
            )}
            {/* Technologies */}
            {technologyUsed?.length > 0 && (
                <div className="max-w-6xl mx-auto px-5 md:px-20 mb-12">
                    <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                    <ul className="flex flex-wrap gap-3 text-gray-700">
                        {technologyUsed.map((tech, i) => (
                            <li
                                key={i}
                                className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-sm font-semibold"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Problem */}
            {problem && (
                <div className="max-w-6xl mx-auto px-5 md:px-20 mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Problem</h2>
                    <p className="text-gray-700 leading-relaxed">{problem}</p>
                </div>
            )}

            {/* Goals / Features / Process */}
            {(goals || keyFeatures || process) && (
                <div className="max-w-6xl mx-auto px-5 md:px-20 grid md:grid-cols-3 gap-10 mb-12">
                    {/* Goals */}
                    {goals && (
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Goals</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                {goals.map((g, i) => (
                                    <li key={i}>{g}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Key Features */}
                    {keyFeatures && (
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                {keyFeatures.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Process */}
                    {process && (
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Process</h3>
                            <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                                {process.map((p, i) => (
                                    <li key={i}>{p}</li>
                                ))}
                            </ol>
                        </div>
                    )}
                </div>
            )}

            {/* Results */}
            {results && (
                <div className="max-w-6xl mx-auto px-5 md:px-20 mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Results</h2>
                    <p className="text-gray-700 leading-relaxed">{results}</p>
                </div>
            )}



            {/* Live Button */}
            {liveLink && (
                <div className="text-center">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 text-white bg-violet-600 hover:bg-violet-700 rounded-full font-semibold shadow-md transition-all"
                    >
                        View Project Live ↗
                    </a>
                </div>
            )}
        </section>
    );
};

export default ProjectCardDetails;
