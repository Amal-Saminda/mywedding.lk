import { Star } from "lucide-react";

type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
};

const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Nimali W.",
    rating: 5,
    text: "Found my partner within three months. Highly recommended.",
    date: "24 Apr 2025",
  },
  {
    id: "2",
    name: "Udayangi M.",
    rating: 5,
    text: "Good platform for finding a marriage partner. The team is supportive and the process feels safe. Thank you!",
    date: "24 Apr 2025",
  },
  {
    id: "3",
    name: "Ruwan S.",
    rating: 4,
    text: "I had a great experience — the profile verification made me feel confident recommending it in Sri Lanka.",
    date: "1 Apr 2025",
  },
];

export default function Reviews() {
  return (
    <section className="bg-blush/60 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="divider-motif mb-10">
          <h2 className="font-display text-2xl font-semibold text-plum">Reviews</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.id}
              className="flex flex-col justify-between rounded-card bg-surface p-6 shadow-card"
            >
              <div>
                <p className="font-display text-lg font-semibold text-plum">{review.name}</p>
                <div className="mt-1 flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < review.rating ? "currentColor" : "none"}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {review.text}
                </blockquote>
              </div>
              <figcaption className="mt-4 text-xs text-ink-soft/70">{review.date}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
