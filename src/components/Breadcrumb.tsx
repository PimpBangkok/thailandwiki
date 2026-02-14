import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { memo } from 'react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

function Breadcrumb({ items }: BreadcrumbProps) {
  const mobileItems = items.length > 2 ? items.slice(-2) : items;
  const showEllipsis = items.length > 2;

  return (
    <div className="bg-[#FAF9F6] border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <nav className="flex items-center space-x-2 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
          <Link to="/" className="text-[#d7007f] hover:text-[#d7007f] hover:underline transition-colors font-medium">
            Home
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {items.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {item.path && index < items.length - 1 ? (
                  <Link to={item.path} className="text-[#d7007f] hover:text-[#d7007f] hover:underline transition-colors font-medium">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-800 font-semibold">{item.label}</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex md:hidden items-center space-x-2">
            {showEllipsis && (
              <>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="text-gray-500">...</span>
              </>
            )}
            {mobileItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {item.path && index < mobileItems.length - 1 ? (
                  <Link to={item.path} className="text-[#d7007f] hover:text-[#d7007f] hover:underline transition-colors font-medium">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-800 font-semibold">{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default memo(Breadcrumb);
