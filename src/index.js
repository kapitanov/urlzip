async function main() {
  console.log("Hello World");

  const href = window.location.search;
  if (href) {
    const { redirect } = await import("./redirect.js");
    redirect(href);
  } else {
    const { display } = await import("./ui.js");
    display("body");
  }
}

main();
