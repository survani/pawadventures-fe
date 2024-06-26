import { Card, CardContent } from "@/components/ui/card";

const LocationUI = ({ attraction }: any) => {
  return (
    <section className="border-none rounded mb-8">
      <section className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0 md:space-x-8 p-0">
        <div className="flex flex-col md:flex-row md:items-center">
          <address className="text-lg font-semibold not-italic">
            {attraction?.location}
          </address>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <p className="text-xl font-semibold text-gray-800">Price Range:</p>
          <p className="text-lg text-main font-semibold">
            {attraction?.prices?.lowestPrice === 0 &&
            attraction?.prices?.highestPrice === 0 ? (
              "Free"
            ) : (
              <span>
                ${attraction?.prices?.lowestPrice} - $
                {attraction?.prices?.highestPrice}
              </span>
            )}
          </p>
        </div>
      </section>
    </section>
  );
};

export default LocationUI;
