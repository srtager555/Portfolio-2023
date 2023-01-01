import Wl from "wrapping-letters-react";

export default function Home() {
  return (
    <>
      <span>The 2023 start here!!!</span>
      <Wl text="hello world !!!" textOptions={{
        ClassToAdd: "aaa",
        SelectClass: {
          wordToSearch: "hello",
          classToAdd: "awa"
        }
      }} />
    </>
  )
}
