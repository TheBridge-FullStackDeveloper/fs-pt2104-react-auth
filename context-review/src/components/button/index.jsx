export default ({ text, onClick }) => {
  return (
    <section>
      <button {...{ onClick }}>{text}</button>
    </section>
  )
}