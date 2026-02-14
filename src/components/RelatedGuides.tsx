import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { memo } from 'react';

interface RelatedGuide {
  title: string;
  excerpt: string;
  image: string;
  path: string;
}

interface RelatedGuidesProps {
  guides: RelatedGuide[];
}

function RelatedGuides({ guides }: RelatedGuidesProps) {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Related Guides</h2>
          <p className="text-gray-600">Continue exploring Thailand with these helpful resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, index) => (
            <Link
              key={index}
              to={guide.path}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2B5D8C] mb-2 line-clamp-2 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {guide.excerpt}
                </p>
                <div className="flex items-center text-[#2B5D8C] font-semibold text-sm group-hover:text-[#2B5D8C] transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(RelatedGuides);
