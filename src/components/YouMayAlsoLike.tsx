import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { memo } from 'react';

interface Article {
  title: string;
  path: string;
}

interface YouMayAlsoLikeProps {
  articles: Article[];
}

function YouMayAlsoLike({ articles }: YouMayAlsoLikeProps) {
  return (
    <section className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <Link
              key={index}
              to={article.path}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-pink-50 hover:shadow-md transition-all duration-200 group border border-gray-200"
            >
              <span className="text-gray-800 group-hover:text-[#D91680] font-medium transition-colors">
                {article.title}
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#D91680] group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(YouMayAlsoLike);
