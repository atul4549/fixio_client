// Inline Styles
export const styles = {
  //   page: {
  //     minHeight: "100vh",
  //     background: "linear-gradient(135deg, #f9fafb 0%, #eff6ff 100%)",
  //   },
  header: {
    width: "100%",
    // height: "9%",
    // padding: "0 30px",
    // position: "sticky" as const,
    // top: 0,
    // zIndex: 50,
    borderRadius: "0 10px 0 0",
    backgroundColor: "rgb(255, 255, 255, 0.5)",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  headerContainer: {
    // maxWidth: "1280px",
    margin: "0 auto",
    padding: "16px",
  },
  headerContent: {
    display: "flex",
    // // flexDirection: "column" as const,
    justifyContent: "space-between",
    alignItems: "center",
    // gap: "16px",
  },
  "@media (min-width: 640px)": {
    headerContent: {
      //   flexDirection: "row" as const,
    },
  },
  logoContainer: {
    // display: "flex",
    // alignItems: "center",
    // gap: "12px",
  },
  logoIcon: {
    // fontSize: "1.875rem",
    // color: "#2563eb",
  },
  logoText: {
    // fontSize: "1.5rem",
    // fontWeight: "bold" as const,
    // color: "#1f2937",
  },
  tagline: {
    // fontSize: "0.875rem",
    // color: "#4b5563",
  },
  userSection: {
    // display: "flex",
    // flexDirection: "column" as const,
    // alignItems: "center",
    // gap: "16px",
    // width: "20%",
    // border: "1px solid red"
  },
  // "@media (min-width: 640px)": {
  //   userSection: {
      //   flexDirection: "row" as const,
      //   width: "auto",
  //   },
  // },
  locationContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    // backgroundColor: "#dbeafe",
    backgroundColor: "#663da6",

    padding: "8px 20px",
    borderRadius: "5px",
    width: "100%",
    border: "none",
    outline: "none",
  },
  // "@media (min-width: 640px)": {
  //   locationContainer: {
  //     width: "auto",
  //   },
  // },
  locationText: {
    fontSize: "0.875rem",
    // color: "#374151",
    color: "#fff",
    fontWeight: "400",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap" as const,
  },
  refreshButton: {
    color: "#2563eb",
    cursor: "pointer",
    marginLeft: "8px",
  },
  userInfo: {
    // display: "flex",
    // alignItems: "center",
    // gap: "12px",
  },
  userContainer: {
    // display: "flex",
    // alignItems: "center",
    // gap: "8px",
    // backgroundColor: "#f3f4f6",
    // padding: "8px 16px",
    // borderRadius: "9999px",
  },
  userName: {
    // fontWeight: 500,
    // color: "#1f2937",
  },
  logoutButton: {
    // display: "flex",
    // alignItems: "center",
    // gap: "8px",
    // backgroundColor: "#ef4444",
    // color: "#ffffff",
    // padding: "8px 16px",
    // borderRadius: "9999px",
    // border: "none",
    // cursor: "pointer",
    // transition: "all 0.3s ease",
    // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  logoutButtonHover: {
    // backgroundColor: "#dc2626",
    // boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    // transform: "translateY(-2px)",
  },
  main: {
    // maxWidth: "1280px",
    // margin: "0 auto",
    // padding: "32px 16px",
  },
  hero: {
    // marginBottom: "48px",
    // textAlign: "center" as const,
  },
  heroContent: {
    // maxWidth: "768px",
    // margin: "0 auto",
  },
  welcomeTitle: {
    // fontSize: "2.25rem",
    // fontWeight: "bold" as const,
    // color: "#111827",
    // marginBottom: "16px",
  },
  // "@media (min-width: 768px)": {
  //   welcomeTitle: {
  //     //   fontSize: "3rem",
  //   },
  // },
  highlight: {
    // color: "#2563eb",
  },
  heroText: {
    // fontSize: "1.125rem",
    // color: "#4b5563",
    // marginBottom: "32px",
  },
  searchContainer: {
    // maxWidth: "40%",
    width: '40%',
    // border: "1px solid white",
    // background:"red",
    // padding: "4px 10px",
    transition: ".5s linear",
    // border:'1px solid red'
    // margin: "0 auto 32px auto",
  },
  searchWrapper: {
    // position: "relative" as const,
  },
  // searchIcon: {
    // position: "absolute" as const,
    // left: "16px",
    // top: "50%",
    // transform: "translateY(-50%)",
    // color: "#9ca3af",
  // },
  searchInput: {
    width: "94%",
    height:"30px",
    background: "#fff",
    padding: "0 10px",
    borderRadius: "5px",
    // border: "1px solid #d1d5db",
    border: "none",
    color: "red",
    outline: "none",
    // boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    transition: ".5s linear",
  },
  searchInputFocus: {
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
  },
  filterIcon: {
    // position: "absolute" as const,
    // right: "16px",
    // top: "50%",
    // transform: "translateY(-50%)",
    // color: "#9ca3af",
  },
  categories: {
    // display: "flex",
    // flexWrap: "wrap" as const,
    // justifyContent: "center",
    // gap: "8px",
    // marginBottom: "32px",
  },
  categoryButton: {
    // padding: "8px 16px",
    // borderRadius: "9999px",
    // fontSize: "0.875rem",
    // fontWeight: 500,
    // border: "none",
    // cursor: "pointer",
    // transition: "all 0.3s ease",
  },
  categoryButtonActive: {
    // backgroundColor: "#2563eb",
    // color: "#ffffff",
    // boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },
  categoryButtonInactive: {
    // backgroundColor: "#ffffff",
    // color: "#374151",
    // boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  servicesHeader: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "space-between",
    // marginBottom: "24px",
  },
  servicesTitle: {
    //     fontSize: "1.5rem",
    //     fontWeight: "bold" as const,
    //     color: "#111827",
    //     display: "flex",
    //     alignItems: "center",
    //     gap: "8px",
  },
  servicesCount: {
    // fontSize: "0.875rem",
    // backgroundColor: "#dbeafe",
    // color: "#1e40af",
    // padding: "4px 12px",
    // borderRadius: "9999px",
    // marginLeft: "8px",
  },
  servicesGrid: {
    // display: "grid",
    // gridTemplateColumns: "1fr",
    // gap: "24px",
  },
  // "@media (min-width: 640px)": {
  //   servicesGrid: {
  //     //   gridTemplateColumns: "repeat(2, 1fr)",
  //   },
  // },
  // "@media (min-width: 1024px)": {
  //   servicesGrid: {
  //     //   gridTemplateColumns: "repeat(3, 1fr)",
  //   },
  // },
  // "@media (min-width: 1280px)": {
  //   servicesGrid: {
  //     //   gridTemplateColumns: "repeat(4, 1fr)",
  //   },
  // },
  emptyState: {
    // textAlign: "center" as const,
    // padding: "48px 0",
  },
  emptyIcon: {
    // fontSize: "3rem",
    // color: "#9ca3af",
    // marginBottom: "16px",
  },
  emptyTitle: {
    // fontSize: "1.25rem",
    // fontWeight: 600,
    // color: "#374151",
    // marginBottom: "8px",
  },
  emptyText: {
    // color: "#6b7280",
  },
  statsSection: {
    // marginTop: "64px",
    // backgroundColor: "#ffffff",
    // borderRadius: "1rem",
    // boxShadow:
    //   "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    // padding: "32px",
  },
  statsGrid: {
    // display: "grid",
    // gridTemplateColumns: "1fr",
    // gap: "32px",
  },
  "@media (min-width: 768px)": {
    statsGrid: {
      //   gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
  statItem: {
    // textAlign: "center" as const,
  },
  statNumber: {
    // fontSize: "1.875rem",
    // fontWeight: "bold" as const,
    // color: "#2563eb",
    // marginBottom: "8px",
  },
  statLabel: {
    // color: "#4b5563",
  },
  footer: {
    // marginTop: "64px",
    // backgroundColor: "#111827",
    // color: "#ffffff",
    // padding: "32px 0",
  },
  footerContainer: {
    // maxWidth: "1280px",
    // margin: "0 auto",
    // padding: "0 16px",
  },
  footerContent: {
    // display: "flex",
    // flexDirection: "column" as const,
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  // "@media (min-width: 768px)": {
  //   footerContent: {
  //     //   flexDirection: "row" as const,
  //   },
  // },
  footerLogo: {
    // display: "flex",
    // alignItems: "center",
    // gap: "8px",
    // marginBottom: "16px",
  },
  footerLogoText: {
    // fontSize: "1.25rem",
    // fontWeight: "bold" as const,
  },
  footerTagline: {
    // color: "#9ca3af",
    // marginTop: "8px",
  },
  copyright: {
    //     color: "#9ca3af",
    //     fontSize: "0.875rem",
  },
  user_data: {
    position: "relative",
    display: "flex",
    alignItem: "center",
    cursor: "pointer",
    transition: ".5s linear",
  },
  h6: {
    width: "70px",
    // color: "rgb(255, 255, 255, 0.5)",
    color: "#333",
    fontWeight: "600",
    fontSize: "9px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    transition: ".5s linear",
    // textDecoration: 'none'
  },
  h5: {
    color: "#fff",
    background: "#663da6",
    borderRadius: "50%",
    padding: "8px 9px",
    fontSize: "11px",
    margin: "0 5px",
    transition: ".5s linear",
  },
};
