function adminregistration() {
  let x = document.getElementsByName("name")[0].value;
  let y = document.getElementsByName("email")[0].value;
  let z = document.getElementsByName("address")[0].value;
  let i = document.getElementsByName("hobbies")[0].value;
  let j = document.getElementsByName("job")[0].value;
  let k = document.getElementsByName("skills")[0].value;
  let l = document.getElementsByName("images")[0].value;

  if (x.trim() === "") {
      alert("Name must be filled out");
      return false;
  }

  if (y.trim() === "") {
      alert("Email must be filled out");
      return false;
  }

  if (z.trim() === "") {
      alert("Address must be filled out");
      return false;
  }

  if (i.trim() === "") {
      alert("Hobbies must be filled out");
      return false;
  }

  if (j.trim() === "") {
      alert("Job must be filled out");
      return false;
  }

  if (k.trim() === "") {
      alert("Skills must be filled out");
      return false;
  }

  if (l.trim() === "") {
      alert("Image must be uploaded");
      return false;
  }

  return true; // Form is valid, can be submitted
}