function Note() {
    return (
        <div className="text-white sm:text-base text-xs font-redhat bg-[#730112] py-2 px-5 mb-5 py-2">
          <div className="font-bold">Note from author</div>
          This project relies on the <a className="underline underline-offset-4 hover:text-paragraph" href="https://blog.archive.org/developers/" target="blank">Wayback Machine API</a> provided by the <a className="underline underline-offset-4 hover:text-paragraph" href="https://archive.org/" target="blank">Internet Archive.</a> 
          {" "}Due to the current limitations of the Internet Archive, the project may not always function as expected.
        </div>
    );
  }

export { Note };