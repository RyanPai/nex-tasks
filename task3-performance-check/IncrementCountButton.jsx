const IncrementCountButton = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(prev => prev + 1)}>Increment: {count}</button>
  )
}

export default IncrementCountButton;