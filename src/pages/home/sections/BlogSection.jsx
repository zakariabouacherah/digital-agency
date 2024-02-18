import BlogItem from "../../../components/BlogItem";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";

const BlogSection = () => {
  const news = [
    {
      date: "13 January",
      title: "Tools to help you easily create proposals",
      imageUrl:
        "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg",
    },
    {
      date: "13 January",
      title: "The Outlook for digital agencies in 4 Charts",
      imageUrl:
        "https://images.pexels.com/photos/6340689/pexels-photo-6340689.jpeg",
    },
    {
      date: "16 January",
      title: "The 13 Best Time Tracking Apps of 2023",
      imageUrl:
        "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg",
    },
  ];
  return (
    <div className="flex flex-col gap-6 px-8 md:px-16 lg:px-32">
      <div className="flex justify-between items-start flex-col md:flex-row md:items-center gap-2">
        <Heading subTitle="our company blog" title="Latest News" />
        <Button label="View All" />
      </div>
      <div className="flex items-start flex-col md:flex-row gap-4 self-center">
        {news.map((item, index) => (
          <BlogItem
            imageUrl={item.imageUrl}
            date={item.date}
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
