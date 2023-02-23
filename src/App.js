import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem";
import { upvoteListItem, downvoteListItem } from "./slices/listSlice";

const handleActionClick = () => {
  console.log("Clicked");
};

function App() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.list);
  const handleUpVote = (id) => {
    dispatch(upvoteListItem({ id }));
  };

  const handleDownVote = (id) => {
    dispatch(downvoteListItem({ id }));
  };

  const sortedList = [...list].sort((a, b) => b.votesCount - a.votesCount);

  const renderList = () => {
    return sortedList.map((listItem, i) => {
      const { id, body, title, votesCount } = listItem;
      return (
        <ListItem
          body={body}
          title={title}
          votesCount={votesCount}
          handleDownVote={() => handleDownVote(id)}
          handleUpVote={() => handleUpVote(id)}
        />
      );
    });
  };
  return (
    <div>
      <Header
        title="My App"
        handleActionClick={handleActionClick}
        imageOnLeft={true}
      />
      {renderList()}
    </div>
  );
}

export default App;
