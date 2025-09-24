import Image from "next/image";
export default function CoursePage() {
  return (
    <div>
      <h1>CoursePage</h1>
      {/* <img src="/lion.jfif" alt="" /> */}
      <Image src={"/lion.jfif"} />
    </div>
  );
}
