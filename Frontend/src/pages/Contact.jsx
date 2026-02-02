import {React,useState} from 'react'

function Contact() {
  const [Data , setData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setData({ name: '', email: '', message: '' });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred while sending the message."+error.message);
    }

    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };


  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
            <input type="text" placeholder="Name" onChange={handleChange} name="name" 
            className="w-full border px-4 py-2 rounded" value={Data.name}/>
            <input type="email" placeholder="Email" onChange={handleChange} name="email"
            className="w-full border px-4 py-2 rounded" value={Data.email}/>
            <textarea placeholder="Message" onChange={handleChange} name="message"
            className="w-full border px-4 py-2 rounded" value={Data.message}></textarea>
            <button className="bg-blue-600 text-white px-6 py-2 rounded" type='submit'>
            Send
            </button>
            {status && <p className="mt-4">{status}</p>}
        </form>
    </section>
  )
}

export default Contact