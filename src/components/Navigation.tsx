// import React from 'react'

import { Link } from "react-router-dom";
import { styles } from "./Nav";
// import { Search } from "./Search";
// import { StatusBtn } from "./StatusBtn";

export const Navigation = () => {
  // return (
  //   <div style={Nav}>nav
  //     <StatusBtn />
  //     <Search />
  //   </div>
  // );
  const authUser = true
  const loading = false
  const location = 'Bikram'
  // const user = {
  //   name: 'atul'
  // }
  return (
    <header style={styles.header}>
        {/* // Header/Navigation */}
        <div style={styles.headerContainer}>
          <div style={styles.headerContent}>
            {/* <div style={styles.logoContainer}>
              <MdHomeRepairService style={styles.logoIcon} />
              <div>
                <h1 style={styles.logoText}>ServiceHub</h1>
                <p style={styles.tagline}>Instant Home Services</p>
              </div>
            </div> */}

            {/* Search Bar */}
            <div style={styles.searchContainer}>
              {/* <div style={styles.searchWrapper}> */}
                {/* <FiSearch style={styles.searchIcon} /> */}
                <input
                  type="text"
                  placeholder="Search services..."
                  // value={searchTerm}
                  // onChange={(e) => setSearchTerm(e.target.value)}
                  style={styles.searchInput}
                  onFocus={(e) =>
                    Object.assign(e.target.style, styles.searchInputFocus)
                  }
                  onBlur={(e) =>
                    Object.assign(e.target.style, styles.searchInput)
                  }
                />
                {/* <FiFilter style={styles.filterIcon} /> */}
              {/* </div> */}
            </div>
            {authUser && (
              <>
                <div style={styles.userSection}>
                  {/* Location Display */}
                  <div style={styles.locationContainer}>
                    {/* <FiMapPin style={{ color: '#2563eb' }} /> */}
                    <span style={styles.locationText}>
                      {loading
                        ? "Detecting location..."
                        : location || "Location not available"}
                    </span>
                    <button
                      // onClick={getUserLocation}
                      style={styles.refreshButton}
                      title="Refresh location"
                    >
                      ↻
                    </button>
                  </div>

                  {/* User Profile */}
                  <div style={styles.userInfo}>
                    <div style={styles.userContainer}>
                  {/* <FiUser style={{ color: '#4b5563' }} /> */}
                  {/* <span style={styles.userName}></span> */}
                </div>
                    {/* <button
                  onClick={handleLogout}
                  style={styles.logoutButton}
                  onMouseOver={(e) =>
                    Object.assign(
                      e.currentTarget.style,
                      styles.logoutButtonHover
                    )
                  }
                  onMouseOut={(e) =>
                    Object.assign(e.currentTarget.style, {
                      ...styles.logoutButton,
                      transform: "translateY(0)",
                    })
                  }
                  aria-label="Logout"
                >
                  {'<FiLogOut />'}
                  <span
                    style={{
                      display: "none",
                      "@media (min-width: 640px)": { display: "inline" },
                    }}
                  >
                    Logout
                  </span>
                </button> */}
                  </div>
                </div>
                {/* <Link to={"/profile"} style={styles.user_data}>
                  <User className="size-5" />
                  <h6 style={styles.h6}>{user?.name || "User"}</h6>
                  <h5 style={styles.h5}>AH</h5>
                </Link> */}

                {/* <button className="flex gap-2 items-center"
                 onClick={logout}
                 >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button> */}
              </>
            )}

            {!authUser && (
              <>
                <Link to={"/login"} className={`btn btn-sm gap-2`}>
                  {/* <User className="size-5" /> */}
                  <span className="hidden sm:inline">login</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

  )
};
