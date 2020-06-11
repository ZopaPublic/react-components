function getGlobalStyleTags() {
  return Array.from(document.querySelectorAll('style')).map((styleTag) =>
    styleTag.innerHTML.trim().replace(/\s+/gm, ' '),
  );
}

export { getGlobalStyleTags };
