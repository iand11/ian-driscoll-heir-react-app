export const Header = ({ handleActionClick, title, imageOnLeft }) => {
  const buttonText = imageOnLeft ? "Add" : "Back";

  const renderLeftSide = () => {
    if (imageOnLeft) {
      return <h1>image</h1>;
    }

    return <button onClick={handleActionClick}>{buttonText}</button>;
  };

  const renderRightSide = () => {
    if (imageOnLeft) {
      return <button onClick={handleActionClick}>{buttonText}</button>;
    }

    return null;
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {renderLeftSide()}
      <h1>{title}</h1>
      {renderRightSide()}
    </div>
  );
};
