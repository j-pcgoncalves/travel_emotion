// create and export styled components along with the animation and theming
import styled from "@emotion/styled";

export const CardWrapper = styled.div`
    width: 250px;
    height: 325px;
    background: #fff;
    border-radius: 15px;
    padding-bottom: 5px;
    @media (max-with: 900px) {
        width: 400px;
    }
`;