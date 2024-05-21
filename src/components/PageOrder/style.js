import styled, { keyframes } from "styled-components";
import { MdOutlineDelete } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const PageOrderStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    width: 90%;
`;

const PageElement = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    padding: 2px 10px;
    border-radius: 5px;
    margin: 5px 0;
    &:hover {
        background-color: #4C4C4C;
    }
`;

const PageTitle = styled.p`
    font-size: 1.1rem;
    cursor: pointer;
`;

const PageSubtitle = styled.p`
    font-size: 0.8rem;
`;

const PageButtons = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    :hover {
        cursor: pointer;
    }
`;

const DeleteButton = styled(MdOutlineDelete)`
    font-size: 1.4rem;
`;

const PlusButton = styled(IoIosArrowDown)`
    font-size: 1.4rem;
    transform: ${(props) => (props.isExpanded ? "rotate(-180deg)" : "rotate(0deg)")};
    transition: transform 0.3s;
`;

const SlideAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const InPageElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  width: 90%;
  animation: ${SlideAnimation} 0.3s ease-in-out;
`;

const ElementList= styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 2px 10px;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    &:hover {
        background-color: #4C4C4C;
    }
`;

export {
    PageOrderStyle,
    PageElement,
    PageTitle,
    PageSubtitle,
    PageButtons,
    DeleteButton,
    PlusButton,
    InPageElement,
    ElementList,
};
