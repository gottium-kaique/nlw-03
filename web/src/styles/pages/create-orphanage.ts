import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  main {
    flex: 1;
  }
`

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;
  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  padding: 64px 80px;
  color: #5c8599;

  .leaflet-container {
    margin-bottom: 40px;
    border: 1px solid #d3e2e5;
    border-radius: 28px;
  }

  overflow: hidden;
  fieldset {
    border: 0;
    legend {
      width: 100%;
      font-size: 32px;
      line-height: 34px;
      color: #5c8599;
      font-weight: 700;
      border-bottom: 1px solid #d3e2e5;
      margin-bottom: 30px;
      padding-bottom: 24px;
    }
  }

  fieldset + fieldset {
    margin-top: 80px;
  }

  button.confirm-button {
    margin-top: 40px;
    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #3cdc8c;
    border-radius: 20px;
    color: #ffffff;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
  }

  button.confirm-button svg {
    margin-right: 16px;
  }

  button.confirm-button:hover {
    background: #36cf82;
  }
`

export const InputBlock = styled.div`
  .button-select button:first-child {
    border-radius: 20px 0 0 20px;
  }

  .button-select button:last-child {
    border-radius: 0 20px 20px 0;
  }

  input[type='file'] {
    display: none;
  }

  input {
    height: 64px;
    padding: 0 16px;
  }

  .images-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;

    img {
      margin-top: 23px;
      width: 100%;
      height: 96px;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  .new-image {
    display: flex;
    height: 96px;
    background: #f5f8fa;
    border: 1px dashed #96d2f0;
    border-radius: 20px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }

  label span {
    font-size: 14px;
    color: #8fa7b3;
    margin-left: 24px;
    line-height: 24px;
  }

  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }

  .button-select button.active {
    background: #edfff6;
    border: 1px solid #a1e9c5;
    color: #37c77f;
  }

  & + & label {
    margin-top: 24px;
    color: #5c8599;
  }

  input,
  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
  }

  .button-select {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .button-select button {
    height: 64px;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    color: #5c8599;
    cursor: pointer;
  }
`
