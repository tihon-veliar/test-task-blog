import styled from "styled-components"

export const MainContainer = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`

export const PostContainer = styled.article`
  background-color: #ffffff;
  overflow: hidden;
  cursor: ${({ pushable }) => (pushable ? "pointer" : "default")};
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 25px;
  margin-top: 25px;
  padding: 1.5rem;
  width: 100%;
`

export const PostTitle = styled.h5`
  font-size: 20px;
  margin: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  font-weight: normal;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};
  font-family: ${({ theme }) => theme.text.fontFamily};
`

export const PostBody = styled.p`
  font-size: 16px;
  margin-bottom: 1.5rem;
  font-weight: normal;
`

export const OverlayConteiner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(44, 54, 50, 0.5);
`

export const TextInput = styled.input`
  // color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 36px;
  margin-bottom: 1.5rem;
  font-weight: normal;
`

export const TextArea = styled.textarea`
  // color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 36px;
  margin-bottom: 1.5rem;
  font-weight: normal;
`

export const CommentsBody = styled.div`
  // color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 36px;
  margin-bottom: 1.5rem;
  font-weight: normal;
`
