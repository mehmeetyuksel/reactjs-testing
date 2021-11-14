import React from "react";
import App from "./App";
import {render, waitFor, screen} from '@testing-library/react'
import EmojiResults from "./EmojiResults"
import userEvent from '@testing-library/user-event'

describe('Emoji Search Testleri', () => {

  let input;

  beforeEach(() => {
    render(<App />)
    input = screen.getByPlaceholderText("Input-Test")

  })
  
  test("Başlık bulundu!", () => {
    expect(screen.getByText("Emoji Search").toBeInDocument)
  })

  test("Uygulama ilk açıldığında bütün emojiler listelendi!", () => {
    const emojis = screen.getAllByText("Test")
    expect(emojis.length).toEqual(20) 
  })

  test("İsmi girilen emoji ekranda listelendi" ,  () => {
    const test_emoji = "Laughing"
    userEvent.type(input, test_emoji)
    expect(screen.getByText("Laughing").toBeInDocument)
  })
  

  
})
