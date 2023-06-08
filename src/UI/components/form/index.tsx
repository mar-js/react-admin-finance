export const Form: React.FC = () => {

  return (
    <form>
      <input type="text" name="description" />
      <input type="number" step="0.1" name="amount" />
      <button type="submit">Add transaction</button>
    </form>
  )
}
