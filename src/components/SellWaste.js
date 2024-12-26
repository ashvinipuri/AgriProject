import React, { useRef, useState } from "react";

const SellWaste = () => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const placeRef = useRef(null);
  const addressRef = useRef(null);
  const emailRef = useRef(null);
  const wasteTypeRef = useRef(null);
  const weightRef = useRef(null);
  const rateRef = useRef(null);
  const imageRef = useRef(null);

  const [message, setMessage] = useState("");

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the form values from useRef
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const place = placeRef.current.value;
    const address = addressRef.current.value;
    const email = emailRef.current.value;
    const wasteType = wasteTypeRef.current.value;
    const weight = weightRef.current.value;
    const rate = rateRef.current.value;
    const image = imageRef.current.files[0];

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("place", place);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("wasteType", wasteType);
    formData.append("weight", weight);
    formData.append("rate", rate);

    try {
      // Make the POST request to the backend API
      const response = await fetch("http://localhost:9001/FarmerDetails", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json(); // Handling success response as JSON
        setMessage(result.message); // Show success message
      } else {
        const errorResult = await response.json(); // Handling error response as JSON
        setMessage(`Error: ${errorResult.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage(`Error: ${error.message || "Unknown error"}`);
    }
  };

  return (
    <div className="container">
      <h1> Sell Waste Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" ref={imageRef} />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          ref={nameRef}
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter mobile no"
          ref={phoneRef}
        />

        <label htmlFor="place">Place</label>
        <input
          type="text"
          id="place"
          name="place"
          placeholder="Enter place"
          ref={placeRef}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter address"
          ref={addressRef}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          ref={emailRef}
        />

        <label htmlFor="wasteType">Waste Type</label>
        <input
          type="text"
          id="wasteType"
          name="wasteType"
          placeholder="Enter waste type"
          ref={wasteTypeRef}
        />

        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          id="weight"
          name="weight"
          placeholder="Enter weight"
          ref={weightRef}
        />

        <label htmlFor="rate">Rate</label>
        <input
          type="number"
          id="rate"
          name="rate"
          placeholder="Enter rate"
          ref={rateRef}
        />

        <button type="submit">Submit</button>
      </form>

      {/* Display message */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default SellWaste;



