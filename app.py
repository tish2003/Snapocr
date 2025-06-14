import streamlit as st

# Set page configuration
st.set_page_config(page_title="HTML Viewer", layout="wide")

# Load HTML file
with open("1.html", "r", encoding="utf-8") as file:
    html_content = file.read()

# Display in Streamlit
st.title("HTML Viewer")
st.components.v1.html(html_content, height=800, scrolling=True)
