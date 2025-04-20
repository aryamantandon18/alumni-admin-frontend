import React, { useEffect, useState } from "react";
import NewsTable from "../components/News/NewsTable";
import { Box, Typography, Button } from "@mui/material";
import { drawerWidth } from "../components/Layout/Header";
import { useNavigate } from "react-router-dom";
import { getAllNews } from "../apis/NewsApi";

const News = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getAllNews();
        setNews(data.items || []);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        setError("Failed to load news. Please try again later.");
      }
    };
    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteNews(id);
      setNews(news.filter((article) => article.newsId !== id));
    } catch (error) {
      console.error("Failed to delete news:", error);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        paddingTop: 0,
        ml: { sm: `${drawerWidth}px` },
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        transition: "margin 0.3s ease-in-out",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        News Articles
      </Typography>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => navigate("/addNews")}
      >
        Add News
      </Button>
      <NewsTable data={news} onDelete={handleDelete} />
    </Box>
  );
};

export default News;
