import styled from "styled-components";

const AnimationText = () => {
  const text = [
    "Web Design",
    "Development",
    "Product",
    "Design And",
    "Digital Solution",
  ];

  const List = styled.p`
    display: flex;
    flex-direction: column;
  `;

  const ListItem = styled.p`
    & {
      font-weight: bold;
      cursor: pointer;
      color: transparent;
      -webkit-text-stroke: 1px gray;
      position: relative;
    }

    &:hover:after {
      content: "${(props) => props.value}";
      position: absolute;
      top: 0;
      left: 0;
      color: #d4af37;
      width: 0px;
      overflow: hidden;
      flex: nowrap;
      white-space: nowrap;
    }

    &:after {
      animation: moveText 2s both linear;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  `;

  return (
    <div className="mt-8 md:mt-4 md:max-w-full lg:max-w-[600px] flex items-center m-auto">
      <List className="">
        {text.map((item, index) => (
          <ListItem
            key={index}
            value={item}
            id="textAnimate"
            className="md:text-[80px] sm:text-[50px] text-[40px]"
          >
            {item}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AnimationText;
