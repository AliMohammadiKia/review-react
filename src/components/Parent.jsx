import Child from "./Child";
const Parent = () => {
  // const name = "ali";
  // const names = ["ali", "sara", "amin", "mahdis", "dina", "ghazal"];
  const images = [
    {
      link: "https://cdn.pixabay.com/photo/2024/01/09/22/11/avocado-8498520_1280.jpg",
      desc: "lorem ipsum 1",
    },
    {
      link: "https://cdn.pixabay.com/photo/2023/06/22/07/13/soil-8080788_960_720.jpg",
      desc: "lorem ipsum 2",
    },
    {
      link: "https://cdn.pixabay.com/photo/2017/08/06/20/19/orange-2595941_960_720.jpg",
      desc: "lorem ipsum 3",
    },
  ];

  return (
    <div>
      <p className="text-center my-4 font-bold text-3xl text-orange-600">
        parent component
      </p>

      <div className="flex">
        {images.map((image, index) => (
          <Child link={image.link} key={index}>
            <p>{image.desc}</p>
          </Child>
        ))}
      </div>

      {/* {names.map((name, index) => {
        return <Child key={index} name={name} />;
      })} */}

      {/* <Child name="ali" />
      <Child name="sara" />
      <Child name="amin" />
      <Child name="dina" /> */}
    </div>
  );
};

export default Parent;
