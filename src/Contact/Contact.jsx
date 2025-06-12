const Contact = () => {
  return (
    <div id="contact" className="md:h-dvh p-[16px] md:px-[80px] bg-[#181823] text-white text-center">
        <h1 className="font-bold text-5xl py-4">Contact Me</h1>

        <div className="h-[50%] place-content-center pb-6">
          <h2 className="text-4xl pb-4">Have an idea or project?</h2>
          <p className="pb-8 text-[1.1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad omnis, earum magni dolores enim repellat obcaecati distinctio laboriosam rem officia, eius quaerat porro non! Odio cum vel ipsa voluptates dolores aut, commodi magni maiores, ratione libero nostrum? Explicabo, iusto.</p>
          <a href="mailto:Itumelengmokoena854@gmail.com" className="w-auto cursor-pointer bg-[#fff] text-[#181823] text-[1.1rem] rounded px-3 py-1 shadow-sm shadow-gray-300">
            Send me a message
          </a>
        </div>
    </div>
  )
}

export default Contact