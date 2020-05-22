import styled, { keyframes } from "styled-components"

export const MainContainer = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 90%;
  position: relative;
  @media screen and ${({ theme }) => theme.device.wideScreen} {
    width: 1140px;
  }
  @media screen and ${({ theme }) => theme.device.desktop} {
    width: 960px;
  }
`

export const PostContainer = styled.article`
  background-color: #ffffff;
  cursor: ${({ pushable }) => (pushable ? "pointer" : "default")};
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 25px;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  ${({ fulWidth }) => (fulWidth ? "flex: 1" : "")}
`

export const PostTitle = styled.h5`
  font-size: 20px;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  font-weight: normal;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};
  font-family: ${({ theme }) => theme.text.fontFamily};
`

export const PostBody = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-family: ${({ theme }) => theme.text.fontFamily};
`

export const OverlayConteiner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(44, 54, 50, 0.5);
`
export const Conteiner = styled.div`
  position: relative;
  overflow-y: auto;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  @media screen and ${({ theme }) => theme.device.wideScreen} {
    width: 1140px;
  }
  @media screen and ${({ theme }) => theme.device.desktop} {
    width: 960px;
  }
`

export const TextInput = styled.input`
  font-size: 18px;
  margin-bottom: 1.5rem;
  font-weight: normal;
  border-radius: 5px;
  padding: 0.9rem 1rem;
  border: 3px solid ${({ theme }) => theme.colors.lightGrey};
  font-family: ${({ theme }) => theme.text.fontFamily};
`

export const TextArea = styled.textarea`
  font-size: 16px;
  margin-bottom: 1.5rem;
  font-weight: normal;
  border-radius: 5px;
  padding: 0.9rem 1rem;
  border: 3px solid ${({ theme }) => theme.colors.lightGrey};
  font-family: ${({ theme }) => theme.text.fontFamily};
`

export const CommentsContainer = styled.article`
  background-color: ${({ theme }) => theme.colors.commentsBg};
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.commentsBg};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 90%;
`

export const CommentsTitle = styled.h5`
  font-size: 18px;
  margin: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  font-weight: normal;
  border-bottom: 2px solid ${({ theme }) => theme.colors.middleGrey};
  font-family: ${({ theme }) => theme.text.fontFamily};
`

export const CommentsBody = styled.p`
  font-size: 15px;
  font-weight: normal;
  font-family: ${({ theme }) => theme.text.fontFamily};
`

export const CloseBtn = styled.div`
  height: 26px;
  width: 26px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  font-size: 15px;
  font-family: ${({ theme }) => theme.text.fontFamily};
  color: red;
`
const keyFrameExampleOne = keyframes`
  0% {
    width: 20px;
  }
  100% {
    width: 400px;
    background: #017b7e;
  }
`

export const Loader = styled.div`
  height: 10px;
  width: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  animation: ${keyFrameExampleOne} 0.5s ease-in-out 0s infinite;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #017b7e;
  border-radius: 10px;
  padding: 15px;
  padding-right: 30px;
  padding-left: 30px;
`
export const ErrorBlock = styled.div`
  padding: 2rem;
  border-radius: 15px;
  background-color: #ffffff;
  color: red;
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 25px;
`

export const SccessfulBlock = styled.div`
  padding: 2rem;
  border-radius: 15px;
  background-color: #ffffff;
  color: #017b7e;
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: 25px;
`

export const AddButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #017b7e;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  font-size: 35px;
  font-family: ${({ theme }) => theme.text.fontFamily};
  padding-bottom: 5px;
  cursor: pointer;
  a {
    color: #fff;
  }
`
