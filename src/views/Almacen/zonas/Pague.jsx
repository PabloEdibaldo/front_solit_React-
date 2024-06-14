
const Pague = () => {
    return (
        <>
        <>
  <meta charSet="utf-8" />
  <title>Color Admin | Dashboard</title>
  <meta
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    name="viewport"
  />
  <meta content="" name="description" />
  <meta content="" name="author" />
  {/* ================== BEGIN BASE CSS STYLE ================== */}
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
    rel="stylesheet"
  />
  <link href="..\assets\css\default\app.min.css" rel="stylesheet" />
  {/* ================== END BASE CSS STYLE ================== */}
  {/* ================== BEGIN PAGE LEVEL STYLE ================== */}
  <link
    href="..\assets\plugins\jvectormap-next\jquery-jvectormap.css"
    rel="stylesheet"
  />
  <link
    href="..\assets\plugins\bootstrap-datepicker\dist\css\bootstrap-datepicker.css"
    rel="stylesheet"
  />
  <link
    href="..\assets\plugins\gritter\css\jquery.gritter.css"
    rel="stylesheet"
  />
  {/* ================== END PAGE LEVEL STYLE ================== */}
  {/* begin #page-loader */}
  <div id="page-loader" className="fade show">
    <span className="spinner" />
  </div>
  {/* end #page-loader */}
  {/* begin #page-container */}
  <div
    id="page-container"
    className="fade page-sidebar-fixed page-header-fixed"
  >
    {/* begin #header */}
    <div id="header" className="header navbar-default">
      {/* begin navbar-header */}
      <div className="navbar-header">
        <a href="index-1.html" className="navbar-brand">
          <span className="navbar-logo" /> <b>Color</b> Admin
        </a>
        <button
          type="button"
          className="navbar-toggle"
          data-click="sidebar-toggled"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      {/* end navbar-header */}
      {/* begin header-nav */}
      <ul className="navbar-nav navbar-right">
        <li className="navbar-form">
          <form action="" method="POST" name="search">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter keyword"
              />
              <button type="submit" className="btn btn-search">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>
        </li>
        <li className="dropdown">
          <a href="#" data-toggle="dropdown" className="dropdown-toggle f-s-14">
            <i className="fa fa-bell" />
            <span className="label">5</span>
          </a>
          <div className="dropdown-menu media-list dropdown-menu-right">
            <div className="dropdown-header">NOTIFICATIONS (5)</div>
            <a href="javascript:;" className="dropdown-item media">
              <div className="media-left">
                <i className="fa fa-bug media-object bg-silver-darker" />
              </div>
              <div className="media-body">
                <h6 className="media-heading">
                  Server Error Reports{" "}
                  <i className="fa fa-exclamation-circle text-danger" />
                </h6>
                <div className="text-muted f-s-10">3 minutes ago</div>
              </div>
            </a>
            <a href="javascript:;" className="dropdown-item media">
              <div className="media-left">
                <img
                  src="..\assets\img\user\user-1.jpeg"
                  className="media-object"
                  alt=""
                />
                <i className="fab fa-facebook-messenger text-blue media-object-icon" />
              </div>
              <div className="media-body">
                <h6 className="media-heading">John Smith</h6>
                <p>
                  Quisque pulvinar tellus sit amet sem scelerisque tincidunt.
                </p>
                <div className="text-muted f-s-10">25 minutes ago</div>
              </div>
            </a>
            <a href="javascript:;" className="dropdown-item media">
              <div className="media-left">
                <img
                  src="..\assets\img\user\user-2.jpeg"
                  className="media-object"
                  alt=""
                />
                <i className="fab fa-facebook-messenger text-blue media-object-icon" />
              </div>
              <div className="media-body">
                <h6 className="media-heading">Olivia</h6>
                <p>
                  Quisque pulvinar tellus sit amet sem scelerisque tincidunt.
                </p>
                <div className="text-muted f-s-10">35 minutes ago</div>
              </div>
            </a>
            <a href="javascript:;" className="dropdown-item media">
              <div className="media-left">
                <i className="fa fa-plus media-object bg-silver-darker" />
              </div>
              <div className="media-body">
                <h6 className="media-heading"> New User Registered</h6>
                <div className="text-muted f-s-10">1 hour ago</div>
              </div>
            </a>
            <a href="javascript:;" className="dropdown-item media">
              <div className="media-left">
                <i className="fa fa-envelope media-object bg-silver-darker" />
                <i className="fab fa-google text-warning media-object-icon f-s-14" />
              </div>
              <div className="media-body">
                <h6 className="media-heading"> New Email From John</h6>
                <div className="text-muted f-s-10">2 hour ago</div>
              </div>
            </a>
            <div className="dropdown-footer text-center">
              <a href="javascript:;">View more</a>
            </div>
          </div>
        </li>
        <li className="dropdown navbar-user">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <img src="..\assets\img\user\user-13.jpeg" alt="" />
            <span className="d-none d-md-inline">Adam Schwartz</span>{" "}
            <b className="caret" />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a href="javascript:;" className="dropdown-item">
              Edit Profile
            </a>
            <a href="javascript:;" className="dropdown-item">
              <span className="badge badge-danger pull-right">2</span> Inbox
            </a>
            <a href="javascript:;" className="dropdown-item">
              Calendar
            </a>
            <a href="javascript:;" className="dropdown-item">
              Setting
            </a>
            <div className="dropdown-divider" />
            <a href="javascript:;" className="dropdown-item">
              Log Out
            </a>
          </div>
        </li>
      </ul>
      {/* end header-nav */}
    </div>
    {/* end #header */}
    {/* begin #sidebar */}
    <div id="sidebar" className="sidebar">
      {/* begin sidebar scrollbar */}
      <div data-scrollbar="true" data-height="100%">
        {/* begin sidebar user */}
        <ul className="nav">
          <li className="nav-profile">
            <a href="javascript:;" data-toggle="nav-profile">
              <div className="cover with-shadow" />
              <div className="image">
                <img src="..\assets\img\user\user-13.jpeg" alt="" />
              </div>
              <div className="info">
                <b className="caret pull-right" />
                Sean Ngu
                <small>Front end developer</small>
              </div>
            </a>
          </li>
          <li>
            <ul className="nav nav-profile">
              <li>
                <a href="javascript:;">
                  <i className="fa fa-cog" /> Settings
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-pencil-alt" /> Send Feedback
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-question-circle" /> Helps
                </a>
              </li>
            </ul>
          </li>
        </ul>
        {/* end sidebar user */}
        {/* begin sidebar nav */}
        <ul className="nav">
          <li className="nav-header">Navigation</li>
          <li className="has-sub active">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-th-large" />
              <span>Dashboard</span>
            </a>
            <ul className="sub-menu">
              <li className="active">
                <a href="index-1.html">Dashboard v1</a>
              </li>
              <li>
                <a href="index_v2.html">Dashboard v2</a>
              </li>
              <li>
                <a href="index_v3.html">Dashboard v3</a>
              </li>
            </ul>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <span className="badge pull-right">10</span>
              <i className="fa fa-hdd" />
              <span>Email</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="email_inbox.html">Inbox</a>
              </li>
              <li>
                <a href="email_compose.html">Compose</a>
              </li>
              <li>
                <a href="email_detail.html">Detail</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="widget.html">
              <i className="fab fa-simplybuilt" />
              <span>
                Widgets <span className="label label-theme">NEW</span>
              </span>
            </a>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-gem" />
              <span>
                UI Elements <span className="label label-theme">NEW</span>
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="ui_general.html">
                  General <i className="fa fa-paper-plane text-theme" />
                </a>
              </li>
              <li>
                <a href="ui_typography.html">Typography</a>
              </li>
              <li>
                <a href="ui_tabs_accordions.html">Tabs &amp; Accordions</a>
              </li>
              <li>
                <a href="ui_unlimited_tabs.html">Unlimited Nav Tabs</a>
              </li>
              <li>
                <a href="ui_modal_notification.html">
                  Modal &amp; Notification{" "}
                  <i className="fa fa-paper-plane text-theme" />
                </a>
              </li>
              <li>
                <a href="ui_widget_boxes.html">Widget Boxes</a>
              </li>
              <li>
                <a href="ui_media_object.html">Media Object</a>
              </li>
              <li>
                <a href="ui_buttons.html">
                  Buttons <i className="fa fa-paper-plane text-theme" />
                </a>
              </li>
              <li>
                <a href="ui_icons.html">Icons</a>
              </li>
              <li>
                <a href="ui_simple_line_icons.html">Simple Line Icons</a>
              </li>
              <li>
                <a href="ui_ionicons.html">Ionicons</a>
              </li>
              <li>
                <a href="ui_tree.html">Tree View</a>
              </li>
              <li>
                <a href="ui_language_bar_icon.html">Language Bar &amp; Icon</a>
              </li>
              <li>
                <a href="ui_social_buttons.html">Social Buttons</a>
              </li>
              <li>
                <a href="ui_tour.html">Intro JS</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="bootstrap_4.html">
              <div className="icon-img">
                <img src="..\assets\img\logo\logo-bs4.png" alt="" />
              </div>
              <span>
                Bootstrap 4 <span className="label label-theme">NEW</span>
              </span>
            </a>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-list-ol" />
              <span>
                Form Stuff <span className="label label-theme">NEW</span>
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="form_elements.html">
                  Form Elements <i className="fa fa-paper-plane text-theme" />
                </a>
              </li>
              <li>
                <a href="form_plugins.html">
                  Form Plugins <i className="fa fa-paper-plane text-theme" />
                </a>
              </li>
              <li>
                <a href="form_slider_switcher.html">Form Slider + Switcher</a>
              </li>
              <li>
                <a href="form_validation.html">Form Validation</a>
              </li>
              <li>
                <a href="form_wizards.html">Wizards</a>
              </li>
              <li>
                <a href="form_wizards_validation.html">Wizards + Validation</a>
              </li>
              <li>
                <a href="form_wysiwyg.html">WYSIWYG</a>
              </li>
              <li>
                <a href="form_editable.html">X-Editable</a>
              </li>
              <li>
                <a href="form_multiple_upload.html">Multiple File Upload</a>
              </li>
              <li>
                <a href="form_summernote.html">Summernote</a>
              </li>
              <li>
                <a href="form_dropzone.html">Dropzone</a>
              </li>
            </ul>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-table" />
              <span>Tables</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="table_basic.html">Basic Tables</a>
              </li>
              <li className="has-sub">
                <a href="javascript:;">
                  <b className="caret" /> Managed Tables
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="table_manage.html">Default</a>
                  </li>
                  <li>
                    <a href="table_manage_autofill.html">Autofill</a>
                  </li>
                  <li>
                    <a href="table_manage_buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="table_manage_colreorder.html">ColReorder</a>
                  </li>
                  <li>
                    <a href="table_manage_fixed_columns.html">Fixed Column</a>
                  </li>
                  <li>
                    <a href="table_manage_fixed_header.html">Fixed Header</a>
                  </li>
                  <li>
                    <a href="table_manage_keytable.html">KeyTable</a>
                  </li>
                  <li>
                    <a href="table_manage_responsive.html">Responsive</a>
                  </li>
                  <li>
                    <a href="table_manage_rowreorder.html">RowReorder</a>
                  </li>
                  <li>
                    <a href="table_manage_scroller.html">Scroller</a>
                  </li>
                  <li>
                    <a href="table_manage_select.html">Select</a>
                  </li>
                  <li>
                    <a href="table_manage_combine.html">
                      Extension Combination
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-star" />
              <span>Front End</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a
                  href="..\..\frontend\one-page-parallax\index.html"
                  target="_blank"
                >
                  One Page Parallax
                </a>
              </li>
              <li>
                <a href="..\..\frontend\blog\index.html" target="_blank">
                  Blog
                </a>
              </li>
              <li>
                <a href="..\..\frontend\forum\index.html" target="_blank">
                  Forum
                </a>
              </li>
              <li>
                <a href="..\..\frontend\e-commerce\index.html" target="_blank">
                  E-Commerce
                </a>
              </li>
            </ul>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-envelope" />
              <span>Email Template</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="email_system.html">System Template</a>
              </li>
              <li>
                <a href="email_newsletter.html">Newsletter Template</a>
              </li>
            </ul>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-chart-pie" />
              <span>
                Chart <span className="label label-theme">NEW</span>
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="chart-flot.html">Flot Chart</a>
              </li>
              <li>
                <a href="chart-morris.html">Morris Chart</a>
              </li>
              <li>
                <a href="chart-js.html">Chart JS</a>
              </li>
              <li>
                <a href="chart-d3.html">d3 Chart</a>
              </li>
              <li>
                <a href="chart-apex.html">
                  Apex Chart <i className="fa fa-paper-plane text-theme" />
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="calendar.html">
              <i className="fa fa-calendar" /> <span>Calendar</span>
            </a>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-map" />
              <span>Map</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="map_vector.html">Vector Map</a>
              </li>
              <li>
                <a href="map_google.html">Google Map</a>
              </li>
            </ul>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-image" />
              <span>Gallery</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="gallery.html">Gallery v1</a>
              </li>
              <li>
                <a href="gallery_v2.html">Gallery v2</a>
              </li>
            </ul>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-cogs" />
              <span>Page Options</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="page_blank.html">Blank Page</a>
              </li>
              <li>
                <a href="page_with_footer.html">Page with Footer</a>
              </li>
              <li>
                <a href="page_without_sidebar.html">Page without Sidebar</a>
              </li>
              <li>
                <a href="page_with_right_sidebar.html">
                  Page with Right Sidebar
                </a>
              </li>
              <li>
                <a href="page_with_minified_sidebar.html">
                  Page with Minified Sidebar
                </a>
              </li>
              <li>
                <a href="page_with_two_sidebar.html">Page with Two Sidebar</a>
              </li>
              <li>
                <a href="page_with_line_icons.html">Page with Line Icons</a>
              </li>
              <li>
                <a href="page_with_ionicons.html">Page with Ionicons</a>
              </li>
              <li>
                <a href="page_full_height.html">Full Height Content</a>
              </li>
              <li>
                <a href="page_with_wide_sidebar.html">Page with Wide Sidebar</a>
              </li>
              <li>
                <a href="page_with_light_sidebar.html">
                  Page with Light Sidebar
                </a>
              </li>
              <li>
                <a href="page_with_mega_menu.html">Page with Mega Menu</a>
              </li>
              <li>
                <a href="page_with_top_menu.html">Page with Top Menu</a>
              </li>
              <li>
                <a href="page_with_boxed_layout.html">Page with Boxed Layout</a>
              </li>
              <li>
                <a href="page_with_mixed_menu.html">Page with Mixed Menu</a>
              </li>
              <li>
                <a href="page_boxed_layout_with_mixed_menu.html">
                  Boxed Layout with Mixed Menu
                </a>
              </li>
              <li>
                <a href="page_with_transparent_sidebar.html">
                  Page with Transparent Sidebar
                </a>
              </li>
            </ul>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-gift" />
              <span>Extra</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="extra_timeline.html">Timeline</a>
              </li>
              <li>
                <a href="extra_coming_soon.html">Coming Soon Page</a>
              </li>
              <li>
                <a href="extra_search_results.html">Search Results</a>
              </li>
              <li>
                <a href="extra_invoice.html">Invoice</a>
              </li>
              <li>
                <a href="extra_404_error.html">404 Error Page</a>
              </li>
              <li>
                <a href="extra_profile.html">Profile Page</a>
              </li>
            </ul>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-key" />
              <span>Login &amp; Register</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="login.html">Login</a>
              </li>
              <li>
                <a href="login_v2.html">Login v2</a>
              </li>
              <li>
                <a href="login_v3.html">Login v3</a>
              </li>
              <li>
                <a href="register_v3.html">Register v3</a>
              </li>
            </ul>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-cubes" />
              <span>
                Version <span className="label label-theme">NEW</span>
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="javascript:;">HTML</a>
              </li>
              <li>
                <a href="..\ajax\index.html">AJAX</a>
              </li>
              <li>
                <a href="..\angularjs\index.html">ANGULAR JS</a>
              </li>
              <li>
                <a href="..\angularjs8\index.html">
                  ANGULAR JS 8 <i className="fa fa-paper-plane text-theme" />
                </a>
              </li>
              <li>
                <a href="..\laravel\index.html">
                  LARAVEL <i className="fa fa-paper-plane text-theme" />
                </a>
              </li>
              <li>
                <a href="..\vuejs\index.html">
                  VUE JS <i className="fa fa-paper-plane text-theme" />
                </a>
              </li>
              <li>
                <a href="..\reactjs\index.html">
                  REACT JS <i className="fa fa-paper-plane text-theme" />
                </a>
              </li>
              <li>
                <a href="..\material\index.html">MATERIAL DESIGN</a>
              </li>
              <li>
                <a href="..\apple\index.html">APPLE DESIGN</a>
              </li>
              <li>
                <a href="..\transparent\index.html">
                  TRANSPARENT DESIGN{" "}
                  <i className="fa fa-paper-plane text-theme" />
                </a>
              </li>
              <li>
                <a href="..\facebook\index.html">
                  FACEBOOK DESIGN <i className="fa fa-paper-plane text-theme" />
                </a>
              </li>
            </ul>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-medkit" />
              <span>Helper</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="helper_css.html">Predefined CSS Classes</a>
              </li>
            </ul>
          </li>
          <li className="has-sub">
            <a href="javascript:;">
              <b className="caret" />
              <i className="fa fa-align-left" />
              <span>Menu Level</span>
            </a>
            <ul className="sub-menu">
              <li className="has-sub">
                <a href="javascript:;">
                  <b className="caret" />
                  Menu 1.1
                </a>
                <ul className="sub-menu">
                  <li className="has-sub">
                    <a href="javascript:;">
                      <b className="caret" />
                      Menu 2.1
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="javascript:;">Menu 3.1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Menu 3.2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:;">Menu 2.2</a>
                  </li>
                  <li>
                    <a href="javascript:;">Menu 2.3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">Menu 1.2</a>
              </li>
              <li>
                <a href="javascript:;">Menu 1.3</a>
              </li>
            </ul>
          </li>
          {/* begin sidebar minify button */}
          <li>
            <a
              href="javascript:;"
              className="sidebar-minify-btn"
              data-click="sidebar-minify"
            >
              <i className="fa fa-angle-double-left" />
            </a>
          </li>
          {/* end sidebar minify button */}
        </ul>
        {/* end sidebar nav */}
      </div>
      {/* end sidebar scrollbar */}
    </div>
    <div className="sidebar-bg" />
    {/* end #sidebar */}
    {/* begin #content */}
    <div id="content" className="content">
      {/* begin breadcrumb */}
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <a href="javascript:;">Home</a>
        </li>
        <li className="breadcrumb-item active">Dashboard</li>
      </ol>
      {/* end breadcrumb */}
      {/* begin page-header */}
      <h1 className="page-header">
        Dashboard <small>header small text goes here...</small>
      </h1>
      {/* end page-header */}
      {/* begin row */}
      <div className="row">
        {/* begin col-3 */}
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-blue">
            <div className="stats-icon">
              <i className="fa fa-desktop" />
            </div>
            <div className="stats-info">
              <h4>TOTAL VISITORS</h4>
              <p>3,291,922</p>
            </div>
            <div className="stats-link">
              <a href="javascript:;">
                View Detail <i className="fa fa-arrow-alt-circle-right" />
              </a>
            </div>
          </div>
        </div>
        {/* end col-3 */}
        {/* begin col-3 */}
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-info">
            <div className="stats-icon">
              <i className="fa fa-link" />
            </div>
            <div className="stats-info">
              <h4>BOUNCE RATE</h4>
              <p>20.44%</p>
            </div>
            <div className="stats-link">
              <a href="javascript:;">
                View Detail <i className="fa fa-arrow-alt-circle-right" />
              </a>
            </div>
          </div>
        </div>
        {/* end col-3 */}
        {/* begin col-3 */}
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-orange">
            <div className="stats-icon">
              <i className="fa fa-users" />
            </div>
            <div className="stats-info">
              <h4>UNIQUE VISITORS</h4>
              <p>1,291,922</p>
            </div>
            <div className="stats-link">
              <a href="javascript:;">
                View Detail <i className="fa fa-arrow-alt-circle-right" />
              </a>
            </div>
          </div>
        </div>
        {/* end col-3 */}
        {/* begin col-3 */}
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-red">
            <div className="stats-icon">
              <i className="fa fa-clock" />
            </div>
            <div className="stats-info">
              <h4>AVG TIME ON SITE</h4>
              <p>00:12:23</p>
            </div>
            <div className="stats-link">
              <a href="javascript:;">
                View Detail <i className="fa fa-arrow-alt-circle-right" />
              </a>
            </div>
          </div>
        </div>
        {/* end col-3 */}
      </div>
      {/* end row */}
      {/* begin row */}
      <div className="row">
        {/* begin col-8 */}
        <div className="col-xl-8">
          {/* begin panel */}
          <div className="panel panel-inverse" data-sortable-id="index-1">
            <div className="panel-heading">
              <h4 className="panel-title">Website Analytics (Last 7 Days)</h4>
              <div className="panel-heading-btn">
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-default"
                  data-click="panel-expand"
                >
                  <i className="fa fa-expand" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-success"
                  data-click="panel-reload"
                >
                  <i className="fa fa-redo" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-warning"
                  data-click="panel-collapse"
                >
                  <i className="fa fa-minus" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-danger"
                  data-click="panel-remove"
                >
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
            <div className="panel-body pr-1">
              <div id="interactive-chart" className="height-sm" />
            </div>
          </div>
          {/* end panel */}
          {/* begin tabs */}
          <ul
            className="nav nav-tabs nav-tabs-inverse nav-justified nav-justified-mobile"
            data-sortable-id="index-2"
          >
            <li className="nav-item">
              <a
                href="#latest-post"
                data-toggle="tab"
                className="nav-link active"
              >
                <i className="fa fa-camera fa-lg m-r-5" />{" "}
                <span className="d-none d-md-inline">Latest Post</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#purchase" data-toggle="tab" className="nav-link">
                <i className="fa fa-archive fa-lg m-r-5" />{" "}
                <span className="d-none d-md-inline">Purchase</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#email" data-toggle="tab" className="nav-link">
                <i className="fa fa-envelope fa-lg m-r-5" />{" "}
                <span className="d-none d-md-inline">Email</span>
              </a>
            </li>
          </ul>
          <div className="tab-content" data-sortable-id="index-3">
            <div className="tab-pane fade active show" id="latest-post">
              <div className="height-sm" data-scrollbar="true">
                <ul className="media-list media-list-with-divider">
                  <li className="media media-lg">
                    <a href="javascript:;" className="pull-left">
                      <img
                        className="media-object rounded"
                        src="..\assets\img\gallery\gallery-1.jpeg"
                        alt=""
                      />
                    </a>
                    <div className="media-body">
                      <h5 className="media-heading">
                        Aenean viverra arcu nec pellentesque ultrices. In erat
                        purus, adipiscing nec lacinia at, ornare ac eros.
                      </h5>
                      Nullam at risus metus. Quisque nisl purus, pulvinar ut
                      mauris vel, elementum suscipit eros. Praesent ornare ante
                      massa, egestas pellentesque orci convallis ut. Curabitur
                      consequat convallis est, id luctus mauris lacinia vel.
                      Nullam tristique lobortis mauris, ultricies fermentum
                      lacus bibendum id. Proin non ante tortor. Suspendisse
                      pulvinar ornare tellus nec pulvinar. Nam pellentesque
                      accumsan mi, non pellentesque sem convallis sed. Quisque
                      rutrum erat id auctor gravida.
                    </div>
                  </li>
                  <li className="media media-lg">
                    <a href="javascript:;" className="pull-left">
                      <img
                        className="media-object rounded"
                        src="..\assets\img\gallery\gallery-10.jpeg"
                        alt=""
                      />
                    </a>
                    <div className="media-body">
                      <h5 className="media-heading">
                        Vestibulum vitae diam nec odio dapibus placerat. Ut ut
                        lorem justo.
                      </h5>
                      Fusce bibendum augue nec fermentum tempus. Sed laoreet
                      dictum tempus. Aenean ac sem quis nulla malesuada
                      volutpat. Nunc vitae urna pulvinar velit commodo cursus.
                      Nullam eu felis quis diam adipiscing hendrerit vel ac
                      turpis. Nam mattis fringilla euismod. Donec eu ipsum sit
                      amet mauris iaculis aliquet. Quisque sit amet feugiat
                      odio. Cras convallis lorem at libero lobortis, placerat
                      lobortis sapien lacinia. Duis sit amet elit bibendum
                      sapien dignissim bibendum.
                    </div>
                  </li>
                  <li className="media media-lg">
                    <a href="javascript:;" className="pull-left">
                      <img
                        className="media-object rounded"
                        src="..\assets\img\gallery\gallery-7.jpeg"
                        alt=""
                      />
                    </a>
                    <div className="media-body">
                      <h5 className="media-heading">
                        Maecenas eget turpis luctus, scelerisque arcu id,
                        iaculis urna. Interdum et malesuada fames ac ante ipsum
                        primis in faucibus.
                      </h5>
                      Morbi placerat est nec pharetra placerat. Ut laoreet nunc
                      accumsan orci aliquam accumsan. Maecenas volutpat dolor
                      vitae sapien ultricies fringilla. Suspendisse vitae orci
                      sed nibh ultrices tristique. Aenean in ante eget urna
                      semper imperdiet. Pellentesque sagittis a nulla at
                      scelerisque. Nam augue nulla, accumsan quis nisi a,
                      facilisis eleifend nulla. Praesent aliquet odio non
                      imperdiet fringilla. Morbi a porta nunc. Vestibulum ante
                      ipsum primis in faucibus orci luctus et ultrices posuere
                      cubilia Curae.
                    </div>
                  </li>
                  <li className="media media-lg">
                    <a href="javascript:;" className="pull-left">
                      <img
                        className="media-object rounded"
                        src="..\assets\img\gallery\gallery-8.jpeg"
                        alt=""
                      />
                    </a>
                    <div className="media-body">
                      <h5 className="media-heading">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor accumsan rutrum.
                      </h5>
                      Fusce augue diam, vestibulum a mattis sit amet, vehicula
                      eu ipsum. Vestibulum eu mi nec purus tempor consequat.
                      Vestibulum porta non mi quis cursus. Fusce vulputate
                      cursus magna, tincidunt sodales ipsum lobortis tincidunt.
                      Mauris quis lorem ligula. Morbi placerat est nec pharetra
                      placerat. Ut laoreet nunc accumsan orci aliquam accumsan.
                      Maecenas volutpat dolor vitae sapien ultricies fringilla.
                      Suspendisse vitae orci sed nibh ultrices tristique. Aenean
                      in ante eget urna semper imperdiet. Pellentesque sagittis
                      a nulla at scelerisque.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="purchase">
              <div className="height-sm" data-scrollbar="true">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th className="hidden-sm text-center">Product</th>
                      <th />
                      <th>Amount</th>
                      <th>User</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="f-w-600 text-muted">13/02/2013</td>
                      <td className="hidden-sm text-center">
                        <a href="javascript:;">
                          <img
                            src="..\assets\img\product\product-1.png"
                            alt=""
                            width="32px"
                          />
                        </a>
                      </td>
                      <td className="text-nowrap">
                        <h6>
                          <a href="javascript:;" className="text-inverse">
                            Nunc eleifend lorem eu velit eleifend, <br />
                            eget faucibus nibh placerat.
                          </a>
                        </h6>
                      </td>
                      <td className="text-blue f-w-600">$349.00</td>
                      <td className="text-nowrap">
                        <a href="javascript:;" className="text-inverse">
                          Derick Wong
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="f-w-600 text-muted">13/02/2013</td>
                      <td className="hidden-sm text-center">
                        <a href="javascript:;">
                          <img
                            src="..\assets\img\product\product-2.png"
                            alt=""
                            width="32px"
                          />
                        </a>
                      </td>
                      <td className="text-nowrap">
                        <h6>
                          <a href="javascript:;" className="text-inverse">
                            Nunc eleifend lorem eu velit eleifend, <br />
                            eget faucibus nibh placerat.
                          </a>
                        </h6>
                      </td>
                      <td className="text-blue f-w-600">$399.00</td>
                      <td className="text-nowrap">
                        <a href="javascript:;" className="text-inverse">
                          Derick Wong
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="f-w-600 text-muted">13/02/2013</td>
                      <td className="hidden-sm text-center">
                        <a href="javascript:;">
                          <img
                            src="..\assets\img\product\product-3.png"
                            alt=""
                            width="32px"
                          />
                        </a>
                      </td>
                      <td className="text-nowrap">
                        <h6>
                          <a href="javascript:;" className="text-inverse">
                            Nunc eleifend lorem eu velit eleifend, <br />
                            eget faucibus nibh placerat.
                          </a>
                        </h6>
                      </td>
                      <td className="text-blue f-w-600">$499.00</td>
                      <td className="text-nowrap">
                        <a href="javascript:;" className="text-inverse">
                          Derick Wong
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="f-w-600 text-muted">13/02/2013</td>
                      <td className="hidden-sm text-center">
                        <a href="javascript:;">
                          <img
                            src="..\assets\img\product\product-4.png"
                            alt=""
                            width="32px"
                          />
                        </a>
                      </td>
                      <td className="text-nowrap">
                        <h6>
                          <a href="javascript:;" className="text-inverse">
                            Nunc eleifend lorem eu velit eleifend, <br />
                            eget faucibus nibh placerat.
                          </a>
                        </h6>
                      </td>
                      <td className="text-blue f-w-600">$230.00</td>
                      <td className="text-nowrap">
                        <a href="javascript:;" className="text-inverse">
                          Derick Wong
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="f-w-600 text-muted">13/02/2013</td>
                      <td className="hidden-sm text-center">
                        <a href="javascript:;">
                          <img
                            src="..\assets\img\product\product-5.png"
                            alt=""
                            width="32px"
                          />
                        </a>
                      </td>
                      <td className="text-nowrap">
                        <h6>
                          <a href="javascript:;" className="text-inverse">
                            Nunc eleifend lorem eu velit eleifend, <br />
                            eget faucibus nibh placerat.
                          </a>
                        </h6>
                      </td>
                      <td className="text-blue f-w-600">$500.00</td>
                      <td className="text-nowrap">
                        <a href="javascript:;" className="text-inverse">
                          Derick Wong
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade" id="email">
              <div className="height-sm" data-scrollbar="true">
                <ul className="media-list media-list-with-divider">
                  <li className="media media-sm">
                    <a href="javascript:;" className="pull-left">
                      <img
                        src="..\assets\img\user\user-1.jpeg"
                        alt=""
                        className="media-object rounded-corner"
                      />
                    </a>
                    <div className="media-body">
                      <a href="javascript:;" className="text-inverse">
                        <h5 className="media-heading">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </h5>
                      </a>
                      <p className="m-b-5">
                        Aenean mollis arcu sed turpis accumsan dignissim. Etiam
                        vel tortor at risus tristique convallis. Donec
                        adipiscing euismod arcu id euismod. Suspendisse potenti.
                        Aliquam lacinia sapien ac urna placerat, eu interdum
                        mauris viverra.
                      </p>
                      <span className="text-muted f-s-11 f-w-600">
                        Received on 04/16/2013, 12.39pm
                      </span>
                    </div>
                  </li>
                  <li className="media media-sm">
                    <a href="javascript:;" className="pull-left">
                      <img
                        src="..\assets\img\user\user-2.jpeg"
                        alt=""
                        className="media-object rounded-corner"
                      />
                    </a>
                    <div className="media-body">
                      <a href="javascript:;" className="text-inverse">
                        <h5 className="media-heading">
                          Praesent et sem porta leo tempus tincidunt eleifend et
                          arcu.
                        </h5>
                      </a>
                      <p className="m-b-5">
                        Proin adipiscing dui nulla. Duis pharetra vel sem ac
                        adipiscing. Vestibulum ut porta leo. Pellentesque orci
                        neque, tempor ornare purus nec, fringilla venenatis
                        elit. Duis at est non nisl dapibus lacinia.
                      </p>
                      <span className="text-muted f-s-11 f-w-600">
                        Received on 04/16/2013, 12.39pm
                      </span>
                    </div>
                  </li>
                  <li className="media media-sm">
                    <a href="javascript:;" className="pull-left">
                      <img
                        src="..\assets\img\user\user-3.jpeg"
                        alt=""
                        className="media-object rounded-corner"
                      />
                    </a>
                    <div className="media-body">
                      <a href="javascript:;" className="text-inverse">
                        <h5 className="media-heading">
                          Ut mi eros, varius nec mi vel, consectetur convallis
                          diam.
                        </h5>
                      </a>
                      <p className="m-b-5">
                        Ut mi eros, varius nec mi vel, consectetur convallis
                        diam. Nullam eget hendrerit eros. Duis lacinia
                        condimentum justo at ultrices. Phasellus sapien arcu,
                        fringilla eu pulvinar id, mattis quis mauris.
                      </p>
                      <span className="text-muted f-s-11 f-w-600">
                        Received on 04/16/2013, 12.39pm
                      </span>
                    </div>
                  </li>
                  <li className="media media-sm">
                    <a href="javascript:;" className="pull-left">
                      <img
                        src="..\assets\img\user\user-4.jpeg"
                        alt=""
                        className="media-object rounded-corner"
                      />
                    </a>
                    <div className="media-body">
                      <a href="javascript:;" className="text-inverse">
                        <h5 className="media-heading">
                          Aliquam nec dolor vel nisl dictum ullamcorper.
                        </h5>
                      </a>
                      <p className="m-b-5">
                        Aliquam nec dolor vel nisl dictum ullamcorper. Duis vel
                        magna enim. Aenean volutpat a dui vitae pulvinar. Nullam
                        ligula mauris, dictum eu ullamcorper quis, lacinia nec
                        mauris.
                      </p>
                      <span className="text-muted f-s-11 f-w-600">
                        Received on 04/16/2013, 12.39pm
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* end tabs */}
          {/* begin panel */}
          <div className="panel panel-inverse" data-sortable-id="index-4">
            <div className="panel-heading">
              <h4 className="panel-title">Quick Post</h4>
              <div className="panel-heading-btn">
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-default"
                  data-click="panel-expand"
                >
                  <i className="fa fa-expand" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-success"
                  data-click="panel-reload"
                >
                  <i className="fa fa-redo" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-warning"
                  data-click="panel-collapse"
                >
                  <i className="fa fa-minus" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-danger"
                  data-click="panel-remove"
                >
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
            <div className="panel-toolbar">
              <div className="btn-group m-r-5">
                <a className="btn btn-white" href="javascript:;">
                  <i className="fa fa-bold" />
                </a>
                <a className="btn btn-white active" href="javascript:;">
                  <i className="fa fa-italic" />
                </a>
                <a className="btn btn-white" href="javascript:;">
                  <i className="fa fa-underline" />
                </a>
              </div>
              <div className="btn-group">
                <a className="btn btn-white" href="javascript:;">
                  <i className="fa fa-align-left" />
                </a>
                <a className="btn btn-white active" href="javascript:;">
                  <i className="fa fa-align-center" />
                </a>
                <a className="btn btn-white" href="javascript:;">
                  <i className="fa fa-align-right" />
                </a>
                <a className="btn btn-white" href="javascript:;">
                  <i className="fa fa-align-justify" />
                </a>
              </div>
            </div>
            <textarea
              className="form-control rounded-0 bg-light p-15"
              rows={14}
              defaultValue={"Enter some comment."}
            />
            <div className="panel-footer text-right">
              <a href="javascript:;" className="btn btn-white btn-sm">
                Cancel
              </a>
              <a href="javascript:;" className="btn btn-primary btn-sm m-l-5">
                Action
              </a>
            </div>
          </div>
          {/* end panel */}
          {/* begin panel */}
          <div className="panel panel-inverse" data-sortable-id="index-5">
            <div className="panel-heading">
              <h4 className="panel-title">Message</h4>
              <div className="panel-heading-btn">
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-default"
                  data-click="panel-expand"
                >
                  <i className="fa fa-expand" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-success"
                  data-click="panel-reload"
                >
                  <i className="fa fa-redo" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-warning"
                  data-click="panel-collapse"
                >
                  <i className="fa fa-minus" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-danger"
                  data-click="panel-remove"
                >
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
            <div className="panel-body">
              <div className="height-sm" data-scrollbar="true">
                <ul className="media-list media-list-with-divider media-messaging">
                  <li className="media media-sm">
                    <a href="javascript:;" className="pull-left">
                      <img
                        src="..\assets\img\user\user-5.jpeg"
                        alt=""
                        className="media-object rounded-corner"
                      />
                    </a>
                    <div className="media-body">
                      <h5 className="media-heading">John Doe</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi id nunc non eros fermentum vestibulum ut id felis.
                        Nunc molestie libero eget urna aliquet, vitae laoreet
                        felis ultricies. Fusce sit amet massa malesuada,
                        tincidunt augue vitae, gravida felis.
                      </p>
                    </div>
                  </li>
                  <li className="media media-sm">
                    <a href="javascript:;" className="pull-left">
                      <img
                        src="..\assets\img\user\user-6.jpeg"
                        alt=""
                        className="media-object rounded-corner"
                      />
                    </a>
                    <div className="media-body">
                      <h5 className="media-heading">Terry Ng</h5>
                      <p>
                        Sed in ante vel ipsum tristique euismod posuere eget
                        nulla. Quisque ante sem, scelerisque iaculis interdum
                        quis, eleifend id mi. Fusce congue leo nec mauris
                        malesuada, id scelerisque sapien ultricies.
                      </p>
                    </div>
                  </li>
                  <li className="media media-sm">
                    <a href="javascript:;" className="pull-left">
                      <img
                        src="..\assets\img\user\user-8.jpeg"
                        alt=""
                        className="media-object rounded-corner"
                      />
                    </a>
                    <div className="media-body">
                      <h5 className="media-heading">Fiona Log</h5>
                      <p>
                        Pellentesque dictum in tortor ac blandit. Nulla rutrum
                        eu leo vulputate ornare. Nulla a semper mi, ac lacinia
                        sapien. Sed volutpat ornare eros, vel semper sem
                        sagittis in. Quisque risus ipsum, iaculis quis cursus
                        eu, tristique sed nulla.
                      </p>
                    </div>
                  </li>
                  <li className="media media-sm">
                    <a href="javascript:;" className="pull-left">
                      <img
                        src="..\assets\img\user\user-7.jpeg"
                        alt=""
                        className="media-object rounded-corner"
                      />
                    </a>
                    <div className="media-body">
                      <h5 className="media-heading">John Doe</h5>
                      <p>
                        Morbi molestie lorem quis accumsan elementum. Morbi
                        condimentum nisl iaculis, laoreet risus sed, porta
                        neque. Proin mi leo, dapibus at ligula a, aliquam
                        consectetur metus.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="panel-footer">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light"
                    placeholder="Enter message"
                  />
                  <span className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fa fa-pencil-alt" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/* end panel */}
        </div>
        {/* end col-8 */}
        {/* begin col-4 */}
        <div className="col-xl-4">
          {/* begin panel */}
          <div className="panel panel-inverse" data-sortable-id="index-6">
            <div className="panel-heading">
              <h4 className="panel-title">Analytics Details</h4>
              <div className="panel-heading-btn">
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-default"
                  data-click="panel-expand"
                >
                  <i className="fa fa-expand" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-success"
                  data-click="panel-reload"
                >
                  <i className="fa fa-redo" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-warning"
                  data-click="panel-collapse"
                >
                  <i className="fa fa-minus" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-danger"
                  data-click="panel-remove"
                >
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-valign-middle table-panel mb-0">
                <thead>
                  <tr>
                    <th>Source</th>
                    <th>Total</th>
                    <th>Trend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label className="label label-danger">
                        Unique Visitor
                      </label>
                    </td>
                    <td>
                      13,203{" "}
                      <span className="text-success">
                        <i className="fa fa-arrow-up" />
                      </span>
                    </td>
                    <td>
                      <div id="sparkline-unique-visitor" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label label-warning">Bounce Rate</label>
                    </td>
                    <td>28.2%</td>
                    <td>
                      <div id="sparkline-bounce-rate" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label label-success">
                        Total Page Views
                      </label>
                    </td>
                    <td>1,230,030</td>
                    <td>
                      <div id="sparkline-total-page-views" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label label-primary">
                        Avg Time On Site
                      </label>
                    </td>
                    <td>00:03:45</td>
                    <td>
                      <div id="sparkline-avg-time-on-site" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label label-default">
                        % New Visits
                      </label>
                    </td>
                    <td>40.5%</td>
                    <td>
                      <div id="sparkline-new-visits" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label label-inverse">
                        Return Visitors
                      </label>
                    </td>
                    <td>73.4%</td>
                    <td>
                      <div id="sparkline-return-visitors" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* end panel */}
          {/* begin panel */}
          <div className="panel panel-inverse" data-sortable-id="index-7">
            <div className="panel-heading">
              <h4 className="panel-title">Visitors User Agent</h4>
              <div className="panel-heading-btn">
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-default"
                  data-click="panel-expand"
                >
                  <i className="fa fa-expand" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-success"
                  data-click="panel-reload"
                >
                  <i className="fa fa-redo" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-warning"
                  data-click="panel-collapse"
                >
                  <i className="fa fa-minus" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-danger"
                  data-click="panel-remove"
                >
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
            <div className="panel-body">
              <div id="donut-chart" className="height-sm" />
            </div>
          </div>
          {/* end panel */}
          {/* begin panel */}
          <div className="panel panel-inverse" data-sortable-id="index-8">
            <div className="panel-heading">
              <h4 className="panel-title">Todo List</h4>
              <div className="panel-heading-btn">
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-default"
                  data-click="panel-expand"
                >
                  <i className="fa fa-expand" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-success"
                  data-click="panel-reload"
                >
                  <i className="fa fa-redo" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-warning"
                  data-click="panel-collapse"
                >
                  <i className="fa fa-minus" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-danger"
                  data-click="panel-remove"
                >
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
            <div className="panel-body p-0">
              <ul className="todolist">
                <li className="active">
                  <a
                    href="javascript:;"
                    className="todolist-container active"
                    data-click="todolist"
                  >
                    <div className="todolist-input">
                      <i className="fa fa-square" />
                    </div>
                    <div className="todolist-title">
                      Donec vehicula pretium nisl, id lacinia nisl tincidunt id.
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="todolist-container"
                    data-click="todolist"
                  >
                    <div className="todolist-input">
                      <i className="fa fa-square" />
                    </div>
                    <div className="todolist-title">
                      Duis a ullamcorper massa.
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="todolist-container"
                    data-click="todolist"
                  >
                    <div className="todolist-input">
                      <i className="fa fa-square" />
                    </div>
                    <div className="todolist-title">
                      Phasellus bibendum, odio nec vestibulum ullamcorper.
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="todolist-container"
                    data-click="todolist"
                  >
                    <div className="todolist-input">
                      <i className="fa fa-square" />
                    </div>
                    <div className="todolist-title">
                      Duis pharetra mi sit amet dictum congue.
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="todolist-container"
                    data-click="todolist"
                  >
                    <div className="todolist-input">
                      <i className="fa fa-square" />
                    </div>
                    <div className="todolist-title">
                      Duis pharetra mi sit amet dictum congue.
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="todolist-container"
                    data-click="todolist"
                  >
                    <div className="todolist-input">
                      <i className="fa fa-square" />
                    </div>
                    <div className="todolist-title">
                      Phasellus bibendum, odio nec vestibulum ullamcorper.
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="todolist-container active"
                    data-click="todolist"
                  >
                    <div className="todolist-input">
                      <i className="fa fa-square" />
                    </div>
                    <div className="todolist-title">
                      Donec vehicula pretium nisl, id lacinia nisl tincidunt id.
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* end panel */}
          {/* begin panel */}
          <div
            className="panel panel-inverse bg-dark"
            data-sortable-id="index-9"
          >
            <div className="panel-heading">
              <h4 className="panel-title">World Visitors</h4>
              <div className="panel-heading-btn">
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-default"
                  data-click="panel-expand"
                >
                  <i className="fa fa-expand" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-success"
                  data-click="panel-reload"
                >
                  <i className="fa fa-redo" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-warning"
                  data-click="panel-collapse"
                >
                  <i className="fa fa-minus" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-danger"
                  data-click="panel-remove"
                >
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
            <div className="panel-body p-0">
              <div id="world-map" className="height-sm width-full" />
            </div>
          </div>
          {/* end panel */}
          {/* begin panel */}
          <div className="panel panel-inverse" data-sortable-id="index-10">
            <div className="panel-heading">
              <h4 className="panel-title">Calendar</h4>
              <div className="panel-heading-btn">
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-default"
                  data-click="panel-expand"
                >
                  <i className="fa fa-expand" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-success"
                  data-click="panel-reload"
                >
                  <i className="fa fa-redo" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-warning"
                  data-click="panel-collapse"
                >
                  <i className="fa fa-minus" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-danger"
                  data-click="panel-remove"
                >
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
            <div className="panel-body">
              <div
                id="datepicker-inline"
                className="datepicker-full-width overflow-y-scroll position-relative"
              >
                <div />
              </div>
            </div>
          </div>
          {/* end panel */}
        </div>
        {/* end col-4 */}
      </div>
      {/* end row */}
    </div>
    {/* end #content */}
    {/* begin theme-panel */}
    <div className="theme-panel theme-panel-lg">
      <a
        href="javascript:;"
        data-click="theme-panel-expand"
        className="theme-collapse-btn"
      >
        <i className="fa fa-cog" />
      </a>
      <div className="theme-panel-content">
        <h5>App Settings</h5>
        <ul className="theme-list clearfix">
          <li>
            <a
              href="javascript:;"
              className="bg-red"
              data-theme="red"
              data-theme-file="../assets/css/default/theme/red.min.css"
              data-click="theme-selector"
              data-toggle="tooltip"
              data-trigger="hover"
              data-container="body"
              data-title="Red"
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-pink"
              data-theme="pink"
              data-theme-file="../assets/css/default/theme/pink.min.css"
              data-click="theme-selector"
              data-toggle="tooltip"
              data-trigger="hover"
              data-container="body"
              data-title="Pink"
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-orange"
              data-theme="orange"
              data-theme-file="../assets/css/default/theme/orange.min.css"
              data-click="theme-selector"
              data-toggle="tooltip"
              data-trigger="hover"
              data-container="body"
              data-title="Orange"
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-yellow"
              data-theme="yellow"
              data-theme-file="../assets/css/default/theme/yellow.min.css"
              data-click="theme-selector"
              data-toggle="tooltip"
              data-trigger="hover"
              data-container="body"
              data-title="Yellow"
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-lime"
              data-theme="lime"
              data-theme-file="../assets/css/default/theme/lime.min.css"
              data-click="theme-selector"
              data-toggle="tooltip"
              data-trigger="hover"
              data-container="body"
              data-title="Lime"
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-green"
              data-theme="green"
              data-theme-file="../assets/css/default/theme/green.min.css"
              data-click="theme-selector"
              data-toggle="tooltip"
              data-trigger="hover"
              data-container="body"
              data-title="Green"
            >
              &nbsp;
            </a>
          </li>
          <li className="active">
            <a
              href="javascript:;"
              className="bg-teal"
              data-theme="default"
              data-theme-file=""
              data-click="theme-selector"
              data-toggle="tooltip"
              data-trigger="hover"
              data-container="body"
              data-title="Default"
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-aqua"
              data-theme="aqua"
              data-theme-file="../assets/css/default/theme/aqua.min.css"
              data-click="theme-selector"
              data-toggle="tooltip"
              data-trigger="hover"
              data-container="body"
              data-title="Aqua"
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-blue"
              data-theme="blue"
              data-theme-file="../assets/css/default/theme/blue.min.css"
              data-click="theme-selector"
              data-toggle="tooltip"
              data-trigger="hover"
              data-container="body"
              data-title="Blue"
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-purple"
              data-theme="purple"
              data-theme-file="../assets/css/default/theme/purple.min.css"
              data-click="theme-selector"
              data-toggle="tooltip"
              data-trigger="hover"
              data-container="body"
              data-title="Purple"
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-indigo"
              data-theme="indigo"
              data-theme-file="../assets/css/default/theme/indigo.min.css"
              data-click="theme-selector"
              data-toggle="tooltip"
              data-trigger="hover"
              data-container="body"
              data-title="Indigo"
            >
              &nbsp;
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              className="bg-black"
              data-theme="black"
              data-theme-file="../assets/css/default/theme/black.min.css"
              data-click="theme-selector"
              data-toggle="tooltip"
              data-trigger="hover"
              data-container="body"
              data-title="Black"
            >
              &nbsp;
            </a>
          </li>
        </ul>
        <div className="divider" />
        <div className="row m-t-10">
          <div className="col-6 control-label text-inverse f-w-600">
            Header Fixed
          </div>
          <div className="col-6 d-flex">
            <div className="custom-control custom-switch ml-auto">
              <input
                type="checkbox"
                className="custom-control-input"
                name="header-fixed"
                id="headerFixed"
                defaultValue={1}
                defaultChecked=""
              />
              <label className="custom-control-label" htmlFor="headerFixed">
                &nbsp;
              </label>
            </div>
          </div>
        </div>
        <div className="row m-t-10">
          <div className="col-6 control-label text-inverse f-w-600">
            Header Inverse
          </div>
          <div className="col-6 d-flex">
            <div className="custom-control custom-switch ml-auto">
              <input
                type="checkbox"
                className="custom-control-input"
                name="header-inverse"
                id="headerInverse"
                defaultValue={1}
              />
              <label className="custom-control-label" htmlFor="headerInverse">
                &nbsp;
              </label>
            </div>
          </div>
        </div>
        <div className="row m-t-10">
          <div className="col-6 control-label text-inverse f-w-600">
            Sidebar Fixed
          </div>
          <div className="col-6 d-flex">
            <div className="custom-control custom-switch ml-auto">
              <input
                type="checkbox"
                className="custom-control-input"
                name="sidebar-fixed"
                id="sidebarFixed"
                defaultValue={1}
                defaultChecked=""
              />
              <label className="custom-control-label" htmlFor="sidebarFixed">
                &nbsp;
              </label>
            </div>
          </div>
        </div>
        <div className="row m-t-10">
          <div className="col-6 control-label text-inverse f-w-600">
            Sidebar Grid
          </div>
          <div className="col-6 d-flex">
            <div className="custom-control custom-switch ml-auto">
              <input
                type="checkbox"
                className="custom-control-input"
                name="sidebar-grid"
                id="sidebarGrid"
                defaultValue={1}
              />
              <label className="custom-control-label" htmlFor="sidebarGrid">
                &nbsp;
              </label>
            </div>
          </div>
        </div>
        <div className="row m-t-10">
          <div className="col-md-6 control-label text-inverse f-w-600">
            Sidebar Gradient
          </div>
          <div className="col-md-6 d-flex">
            <div className="custom-control custom-switch ml-auto">
              <input
                type="checkbox"
                className="custom-control-input"
                name="sidebar-gradient"
                id="sidebarGradient"
                defaultValue={1}
              />
              <label className="custom-control-label" htmlFor="sidebarGradient">
                &nbsp;
              </label>
            </div>
          </div>
        </div>
        <div className="divider" />
        <h5>Admin Design (5)</h5>
        <div className="theme-version">
          <a href="index_v2.html" className="active">
            <span
              style={{
                backgroundImage: "url(../assets/img/theme/default.jpeg)"
              }}
            />
          </a>
          <a href="..\transparent\index_v2.html">
            <span
              style={{
                backgroundImage: "url(../assets/img/theme/transparent.jpeg)"
              }}
            />
          </a>
        </div>
        <div className="theme-version">
          <a href="..\apple\index_v2.html">
            <span
              style={{ backgroundImage: "url(../assets/img/theme/apple.jpeg)" }}
            />
          </a>
          <a href="..\material\index_v2.html">
            <span
              style={{
                backgroundImage: "url(../assets/img/theme/material.jpeg)"
              }}
            />
          </a>
        </div>
        <div className="theme-version">
          <a href="..\facebook\index_v2.html">
            <span
              style={{
                backgroundImage: "url(../assets/img/theme/facebook.jpeg)"
              }}
            />
          </a>
        </div>
        <div className="divider" />
        <h5>Language Version (7)</h5>
        <div className="theme-version">
          <a href="index_v2.html" className="active">
            <span
              style={{
                backgroundImage: "url(../assets/img/version/html.jpeg)"
              }}
            />
          </a>
          <a href="..\ajax\index.html">
            <span
              style={{
                backgroundImage: "url(../assets/img/version/ajax.jpeg)"
              }}
            />
          </a>
        </div>
        <div className="theme-version">
          <a href="..\angularjs\index.html">
            <span
              style={{
                backgroundImage: "url(../assets/img/version/angular1x.jpeg)"
              }}
            />
          </a>
          <a href="..\angularjs8\index.html">
            <span
              style={{
                backgroundImage: "url(../assets/img/version/angular8x.jpeg)"
              }}
            />
          </a>
        </div>
        <div className="theme-version">
          <a href="..\laravel\index.html">
            <span
              style={{
                backgroundImage: "url(../assets/img/version/laravel.jpeg)"
              }}
            />
          </a>
          <a href="..\vuejs\index.html">
            <span
              style={{
                backgroundImage: "url(../assets/img/version/vuejs.jpeg)"
              }}
            />
          </a>
        </div>
        <div className="theme-version">
          <a href="..\reactjs\index.html">
            <span
              style={{
                backgroundImage: "url(../assets/img/version/reactjs.jpeg)"
              }}
            />
          </a>
        </div>
        <div className="divider" />
        <h5>Frontend Design (4)</h5>
        <div className="theme-version">
          <a href="..\..\frontend\one-page-parallax\index.html">
            <span
              style={{
                backgroundImage:
                  "url(../assets/img/theme/one-page-parallax.jpeg)"
              }}
            />
          </a>
          <a href="..\..\frontend\e-commerce\index.html">
            <span
              style={{
                backgroundImage: "url(../assets/img/theme/e-commerce.jpeg)"
              }}
            />
          </a>
        </div>
        <div className="theme-version">
          <a href="..\..\frontend\blog\index.html">
            <span
              style={{ backgroundImage: "url(../assets/img/theme/blog.jpeg)" }}
            />
          </a>
          <a href="..\..\frontend\forum\index.html">
            <span
              style={{ backgroundImage: "url(../assets/img/theme/forum.jpeg)" }}
            />
          </a>
        </div>
        <div className="divider" />
        <div className="row m-t-10">
          <div className="col-md-12">
            <a
              href="..\..\documentation\index.html"
              className="btn btn-inverse btn-block btn-rounded"
              target="_blank"
            >
              <b>Documentation</b>
            </a>
            <a
              href="javascript:;"
              className="btn btn-default btn-block btn-rounded"
              data-click="reset-local-storage"
            >
              <b>Reset Local Storage</b>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* end theme-panel */}
    {/* begin scroll to top btn */}
    <a
      href="javascript:;"
      className="btn btn-icon btn-circle btn-success btn-scroll-to-top fade"
      data-click="scroll-top"
    >
      <i className="fa fa-angle-up" />
    </a>
    {/* end scroll to top btn */}
  </div>
  {/* end page container */}
  {/* ================== BEGIN BASE JS ================== */}
  {/* ================== END BASE JS ================== */}
  {/* ================== BEGIN PAGE LEVEL JS ================== */}
  {/* ================== END PAGE LEVEL JS ================== */}
</>

        </>
      
    )
}
export default Pague;