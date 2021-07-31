import { testNoChange } from "../../declarations/testNoChange";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with testNoChange actor, calling the greet method
  const greeting = await testNoChange.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
