import data from './AboutData.json'

const About = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900">{data.title}</h2>
                <p className="mt-4 text-lg text-gray-600">
                    {data.description}
                </p>
            </div>
        </section>
    );
};

export default About;