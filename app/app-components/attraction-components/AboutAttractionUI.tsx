import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/app/app-components/attraction-components/RichTextComponents";
import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const AboutAttractionUI = ({ attraction }: any) => {
  const daysWithTimes = attraction?.availability?.map((day: any) => {
    return {
      day: day.day,
      startTime: day.availableTimes[0]?.from,
      endTime: day.availableTimes[0]?.to,
    };
  });

  return (
    <Card className="w-full mt-6 lg:w-1/3 bg-slate-50 lg:mt-0 h-fit">
      <CardHeader>
        <h2 className="mb-2 text-lg font-bold text-gray-900">
          About
          <span className="text-main ml-2">{attraction?.title}</span>
        </h2>
        <PortableText
          value={attraction?.body}
          components={RichTextComponents}
        />
        <p className="mt-4 text-base">{attraction?.content}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <section>
          <h2 className="mb-1 text-lg font-bold text-gray-900">
            Operating Hours
          </h2>
          {daysWithTimes?.map((day: any, index: number) => (
            <div key={index} className="flex justify-between">
              <p
                className={
                  day.day ===
                  new Date().toLocaleDateString("en-US", { weekday: "long" })
                    ? "font-bold text-green-600"
                    : ""
                }
              >
                {day.day}
              </p>
              <p
                className={
                  day.day ===
                  new Date().toLocaleDateString("en-US", { weekday: "long" })
                    ? "font-bold text-green-600"
                    : ""
                }
              >
                {day.startTime} - {day.endTime}
              </p>
            </div>
          ))}
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-gray-900">Social Media</h2>
          <div className="flex gap-2">
            {attraction?.socialStack?.map((social: any, index: number) => (
              <Link key={index} href={social.socialLink}>
                {social.socialPlatform === "Instagram" ? (
                  <Instagram />
                ) : social.socialPlatform === "Facebook" ? (
                  <Facebook />
                ) : social.socialPlatform === "LinkedIn" ? (
                  <Linkedin />
                ) : null}
              </Link>
            ))}
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default AboutAttractionUI;
