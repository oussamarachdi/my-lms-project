import Section from "../layout/Section";
import Card from "../ui/Card";
import { ArrowRight, X } from "lucide-react";
import { editions } from "../../data/content";
import { useState } from "react";

export default function Editions() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideoModal = () => setIsVideoOpen(true);
  const closeVideoModal = () => setIsVideoOpen(false);

  return (
    <>
      <section id="editions" className="bg-gray-50 border-y border-gray-200">
        <Section className="py-12 sm:py-16">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Previous Conference Edition</h2>
          </div>
          <div className="mt-8 flex justify-center">
            {editions.map((e, idx) => (
              <Card key={idx} className="p-6 hover:shadow-sm transition max-w-md w-full">
                <div className="aspect-video w-full rounded-xl overflow-hidden">
                  <img 
                    src="/conference-photo.jpg" 
                    alt="Conference attendees group photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-center">{e.title}</h3>
                <p className="text-sm text-gray-600 text-center">{e.meta}</p>
                <div className="flex justify-center">
                  <button 
                    onClick={openVideoModal}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:underline"
                  >
                    View recap <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-black/80 bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeVideoModal}
        >
          <div 
            className="relative bg-black rounded-lg overflow-hidden max-w-5xl w-full aspect-video shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition text-white"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Video Content */}
            <iframe
              className="w-full h-full rounded-lg"
              src="https://drive.google.com/file/d/1fSO2CvQEr2CBSknf9UTSy4ulT-BL_1jL/preview"
              title="TEDx Hadrumet 2024 - Conference Recap"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      )}
    </>
  );
}