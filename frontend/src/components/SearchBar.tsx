import { useState } from "react";
import "./SearchBar.css";
import { citySchema } from "../validation/weatherValidation";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (city: string) => void;
}) {
  const [inputValue, setInputValue] = useState<string>("");

  const [inputError, setInputError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = citySchema.safeParse(inputValue);

    if (!result.success) {
      setInputError(result.error.issues[0].message);
      return;
    }

    setInputError("");
    onSearch(result.data);
    setInputValue("");
  };

  return (
    <>
      <form className="submit-form" onSubmit={handleSubmit}>
        <span className="search-icon">📍</span>
        <input
          className="search-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter city name..."
        />
        <button type="submit">🔍 Search</button>
      </form>
      {inputError && <p className="input-error">{inputError}</p>}
    </>
  );
}
