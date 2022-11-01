export const SetmenuObject = (userprofile) => {
  let menuObject = [];
  if (userprofile != null && userprofile != undefined) {
    if (userprofile.scan)
      menuObject.push({
        Name: "HOME",
        Component: "HOME",
        Title: "HOME",
        Icon: "home",
      });
    if (userprofile.transfer)
      menuObject.push({
        Name: "TRANSFER",
        Component: "TRANSFER",
        Title: "TRANSFER",
        Icon: "truck",
      });
  }
  return menuObject;
};
