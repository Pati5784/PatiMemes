import { Box, Button } from "@mui/material";

export function Meme(props) {
  return (
    <Box
      sx={{
        margin: "10px 0",
        padding: "10px 0",
        border: "1px dotted gray",
      }}
    >
      <Box sx={{ margin: "24px" }}>
        <img src={props.imgUrl} style={{ maxWidth: "100%" }} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", margin: "10px" }}>
        <Button
          variant="outlined"
          color="success"
          onClick={() => props.upvote(props.title)}
          sx={{ margin: "0 10px" }}
        >
          Upvote (count: {props.upvotes})
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => props.downvote(props.title)}
          sx={{ margin: "0 10px" }}
        >
          Downvote (count: {props.downvotes})
        </Button>
      </Box>
    </Box>
  );
}
