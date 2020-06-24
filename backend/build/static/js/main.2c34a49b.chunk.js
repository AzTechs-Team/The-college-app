(this["webpackJsonpmern-react"] = this["webpackJsonpmern-react"] || []).push([
  [0],
  {
    147: function (e, t, a) {
      e.exports = a(199);
    },
    152: function (e, t, a) {},
    153: function (e, t, a) {},
    161: function (e, t, a) {
      e.exports = a.p + "static/media/background.4ca83ada.png";
    },
    162: function (e, t, a) {
      e.exports = a.p + "static/media/dsc.569e1296.png";
    },
    163: function (e, t, a) {
      e.exports = a.p + "static/media/microsoft.3781301a.png";
    },
    164: function (e, t, a) {
      e.exports = a.p + "static/media/mozilla.9e2725b5.png";
    },
    165: function (e, t, a) {
      e.exports = a.p + "static/media/notes1.00cf0944.png";
    },
    166: function (e, t, a) {
      e.exports = a.p + "static/media/notes2.d581d8ff.png";
    },
    167: function (e, t, a) {
      e.exports = a.p + "static/media/notes3.a008851f.png";
    },
    168: function (e, t, a) {
      e.exports = a.p + "static/media/notes4.b65858f5.png";
    },
    173: function (e, t, a) {},
    174: function (e, t, a) {
      var n = {
        "./banner1.jpg": 83,
        "./carousel-one.jpg": 95,
        "./carousel-three.jpg": 96,
        "./carousel-two.jpg": 97,
        "./main1.jpg": 65,
        "./main2.jpg": 66,
        "./main3.jpg": 67,
        "./pattern.jpg": 98,
        "./user1.jpg": 84,
      };
      function r(e) {
        var t = o(e);
        return a(t);
      }
      function o(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (r.keys = function () {
        return Object.keys(n);
      }),
        (r.resolve = o),
        (e.exports = r),
        (r.id = 174);
    },
    198: function (e, t, a) {},
    199: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        o = a(10),
        l = a.n(o),
        i = (a(152), a(27)),
        c = a(28),
        s = a(30),
        m = a(29),
        u = (a(153), a(49)),
        d = a(7),
        p = a(243),
        b = a(242),
        g = a(237),
        h = a(262),
        f = a(263),
        E = a(245),
        v = a(238),
        C = a(239),
        x = a(240),
        y = a(241),
        w = a(114),
        k = a.n(w),
        j = a(244),
        N = a(37),
        S = a(235),
        O = a(13),
        R = a(12),
        D = a(246),
        T = a(111),
        _ = a.n(T),
        I = a(112),
        P = a.n(I),
        L = a(113),
        A = a.n(L),
        z = a(73),
        B = a.n(z),
        M = a(110),
        U = a.n(M),
        W = Object(S.a)(function (e) {
          var t;
          return {
            root: {
              display: "flex",
              "& .MuiPaper-root": {
                backgroundColor: "#1d1d1d",
                boxShadow: "3px 3px 8px #000",
              },
              backgroundColor: "#2d2d2d",
            },
            drawer:
              ((t = {}),
              Object(d.a)(t, e.breakpoints.up("sm"), {
                width: 190,
                flexShrink: 0,
              }),
              Object(d.a)(t, "zIndex", 10),
              Object(d.a)(t, "height", "auto"),
              Object(d.a)(t, "border", 0),
              t),
            appBar: Object(d.a)({ marginLeft: 190 }, e.breakpoints.up("sm"), {
              width: "100%",
            }),
            menuButton: Object(d.a)(
              { marginRight: e.spacing(2) },
              e.breakpoints.up("sm"),
              { display: "none" }
            ),
            toolbar: Object(d.a)(
              { backgroundColor: "#131313" },
              e.mixins.toolbar,
              { marginBottom: 0 }
            ),
            drawerPaper: { width: 190 },
            toolbarButtons: Object(d.a)(
              { marginLeft: "auto", marginRight: 5 },
              e.breakpoints.down("sm"),
              { marginRight: e.spacing(-2) }
            ),
            logoHide: Object(d.a)({ display: "none" }, e.breakpoints.up("sm"), {
              display: "block",
              paddingRight: "10px",
            }),
            btn_1: Object(d.a)(
              {
                backgroundColor: "#e84a5f",
                marginRight: "10px",
                borderRadius: "5px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#131313",
                  color: "#e84a5f",
                  boxShadow: "none",
                },
              },
              e.breakpoints.down("sm"),
              { padding: "3px 11px" }
            ),
            hide: { display: "none" },
            sidebar: { backgroundColor: "#1d1d1d", height: "100vh" },
            tabs_tabs: {
              color: "white",
              "&:hover": { backgroundColor: "#4e4e4e" },
            },
          };
        });
      var q = function (e) {
          var t = e.container,
            n = e.onRouteChange,
            o = e.loginStatus,
            l = e.loggedIn,
            i = W(),
            c = Object(O.a)(),
            s = r.a.useState(!1),
            m = Object(u.a)(s, 2),
            d = m[0],
            w = m[1],
            S = function () {
              w(!d);
            },
            T = r.a.createElement(
              "div",
              { className: i.sidebar },
              r.a.createElement(
                "div",
                { className: "".concat(i.toolbar) },
                r.a.createElement("img", {
                  src: a(64),
                  style: {
                    height: "57px",
                    position: "relative",
                    left: "32%",
                    bottom: "15%",
                  },
                  alt: "logo",
                })
              ),
              r.a.createElement(g.a, null),
              r.a.createElement(
                v.a,
                null,
                r.a.createElement(
                  C.a,
                  {
                    key: "User Profile",
                    component: R.b,
                    to: "/user",
                    className: o ? i.tabs_tabs : i.hide,
                    onClick: function () {
                      n("user");
                    },
                  },
                  r.a.createElement(
                    x.a,
                    null,
                    r.a.createElement(U.a, { className: i.tabs_tabs })
                  ),
                  r.a.createElement(y.a, { primary: "User Profile" })
                ),
                r.a.createElement(
                  C.a,
                  {
                    key: "Events",
                    component: R.b,
                    to: "/events",
                    className: i.tabs_tabs,
                    onClick: function () {
                      n("events");
                    },
                  },
                  r.a.createElement(
                    x.a,
                    null,
                    r.a.createElement(_.a, { className: i.tabs_tabs })
                  ),
                  r.a.createElement(y.a, { primary: "Events" })
                ),
                r.a.createElement(
                  C.a,
                  {
                    key: "Clubs",
                    component: R.b,
                    to: "/clubs",
                    className: i.tabs_tabs,
                    onClick: function () {
                      n("clubs");
                    },
                  },
                  r.a.createElement(
                    x.a,
                    null,
                    r.a.createElement(P.a, { className: i.tabs_tabs })
                  ),
                  r.a.createElement(y.a, {
                    primary: "Clubs",
                    className: i.tabs_tabs,
                  })
                ),
                r.a.createElement(
                  C.a,
                  {
                    key: "Resources",
                    component: R.b,
                    to: "/resources",
                    className: o ? i.tabs_tabs : i.hide,
                    onClick: function () {
                      n("resources");
                    },
                  },
                  r.a.createElement(
                    x.a,
                    null,
                    r.a.createElement(A.a, { className: i.tabs_tabs })
                  ),
                  r.a.createElement(y.a, {
                    primary: "Resources",
                    className: i.tabs_tabs,
                  })
                ),
                r.a.createElement(
                  C.a,
                  {
                    key: "Contact",
                    component: R.b,
                    to: "/contact",
                    className: i.tabs_tabs,
                    onClick: function () {
                      n("contact");
                    },
                  },
                  r.a.createElement(
                    x.a,
                    null,
                    r.a.createElement(B.a, { className: i.tabs_tabs })
                  ),
                  r.a.createElement(y.a, {
                    primary: "Contact",
                    className: i.tabs_tabs,
                  })
                ),
                r.a.createElement(g.a, { style: { marginTop: "30px" } })
              )
            );
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              "div",
              { className: i.root },
              r.a.createElement(b.a, null),
              r.a.createElement(
                p.a,
                { position: "fixed", className: i.appBar },
                r.a.createElement(
                  j.a,
                  { className: i.toolbar },
                  r.a.createElement(
                    E.a,
                    {
                      color: "inherit",
                      "aria-label": "open drawer",
                      edge: "start",
                      onClick: S,
                      className: i.menuButton,
                    },
                    r.a.createElement(k.a, null)
                  ),
                  r.a.createElement(
                    R.b,
                    { to: "/" },
                    r.a.createElement("img", {
                      src: a(64),
                      style: { height: "45px" },
                      alt: "logo",
                      className: i.logoHide,
                      component: R.b,
                      to: "/",
                      onClick: function () {
                        n("home");
                      },
                    })
                  ),
                  r.a.createElement(
                    N.a,
                    {
                      variant: "h5",
                      align: "center",
                      noWrap: !0,
                      component: R.b,
                      to: "/",
                      style: {
                        fontWeight: "400",
                        color: "white",
                        textDecoration: "none",
                        textAlign: "center",
                      },
                      onClick: function () {
                        n("home");
                      },
                    },
                    "CLUSTER"
                  ),
                  r.a.createElement(
                    "div",
                    { className: i.toolbarButtons },
                    r.a.createElement(
                      D.a,
                      {
                        variant: "contained",
                        className: o ? i.hide : i.btn_1,
                        onClick: function () {
                          n("login");
                        },
                        component: R.b,
                        to: "/login",
                      },
                      "Log in"
                    ),
                    r.a.createElement(
                      D.a,
                      {
                        variant: "contained",
                        className: o ? i.hide : i.btn_1,
                        component: R.b,
                        to: "/signup",
                        onClick: function () {
                          n("signup");
                        },
                      },
                      "Sign up"
                    ),
                    r.a.createElement(
                      D.a,
                      {
                        variant: "contained",
                        className: o ? i.btn_1 : i.hide,
                        component: R.b,
                        to: "/home",
                        onClick: function () {
                          n("home"), l(!1);
                        },
                      },
                      "Sign out"
                    )
                  )
                )
              ),
              r.a.createElement(
                "nav",
                { className: i.drawer, "aria-label": "mailbox folders" },
                r.a.createElement(
                  f.a,
                  { smUp: !0, implementation: "css" },
                  r.a.createElement(
                    h.a,
                    {
                      container: t,
                      variant: "temporary",
                      anchor: "rtl" === c.direction ? "right" : "left",
                      open: d,
                      onClose: S,
                      classes: { paper: i.drawerPaper },
                      ModalProps: { keepMounted: !0 },
                    },
                    T
                  )
                ),
                r.a.createElement(
                  f.a,
                  { xsDown: !0, implementation: "css" },
                  r.a.createElement(
                    h.a,
                    {
                      classes: { paper: i.drawerPaper },
                      variant: "permanent",
                      open: !0,
                    },
                    T
                  )
                )
              )
            )
          );
        },
        H = a(115),
        V = a.n(H),
        F = (a(160), a(65)),
        J = a.n(F),
        G = a(66),
        Q = a.n(G),
        $ = a(67),
        K = a.n($),
        Y = [{ image: J.a }, { image: Q.a }, { image: K.a }];
      var Z = function () {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement("br", null),
            r.a.createElement("br", null),
            r.a.createElement("br", null),
            r.a.createElement(
              V.a,
              { autoplay: 2500 },
              Y.map(function (e, t) {
                return r.a.createElement("div", {
                  key: t,
                  className: "slider-content",
                  style: {
                    background: "url(".concat(e.image, ")"),
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  },
                });
              })
            )
          );
        },
        X = a(248),
        ee = a(251),
        te = a(250),
        ae = a(249),
        ne = Object(S.a)(function (e) {
          return {
            root: {
              maxWidth: 230,
              marginTop: "40px",
              border: 0,
              boxShadow: "none",
              backgroundColor: "#2d2d2d",
              color: "white",
            },
            media: { paddingTop: 0, marginTop: 0, height: "auto" },
            img: { height: "120px", width: "120px", alignSelf: "center" },
            content_card: { textAlign: "center" },
            btn_1: {
              backgroundColor: "#e84a5f",
              marginRight: "10px",
              borderRadius: "5px",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#2d2d2d",
                color: "#e84a5f",
                boxShadow: "none",
              },
            },
          };
        }),
        re = function (e) {
          var t = ne();
          return r.a.createElement(
            X.a,
            { className: t.root },
            r.a.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
              r.a.createElement(ae.a, {
                className: "".concat(t.media, " ").concat(t.img),
                image: a(53)("./".concat(e.img)),
                title: e.name,
              })
            ),
            r.a.createElement(
              te.a,
              { className: t.content_card },
              r.a.createElement(
                N.a,
                { variant: "h5", component: "h2", style: { color: "#fff" } },
                e.name
              ),
              r.a.createElement(
                N.a,
                {
                  variant: "body2",
                  color: "textSecondary",
                  component: "p",
                  style: { color: "#bfbfbf" },
                },
                e.desc
              )
            ),
            r.a.createElement(
              "div",
              { style: { display: "flex", justifyContent: "center" } },
              r.a.createElement(
                ee.a,
                null,
                r.a.createElement(
                  D.a,
                  {
                    size: "small",
                    variant: "contained",
                    className: t.btn_1,
                    onClick: function () {
                      e.onRouteChange("clubs");
                    },
                  },
                  "Join"
                )
              )
            )
          );
        },
        oe = a(252),
        le = a(129),
        ie = Object(S.a)({
          root: {
            display: "flex",
            flexWrap: "wrap",
            "& > *": {
              width: "100%",
              height: "auto",
              backgroundColor: "#4e4e4  e",
              color: "#fff",
              padding: "30px 50px",
              textAlign: "center",
            },
          },
          btn_1: {
            backgroundColor: "#e84a5f",
            marginRight: "10px",
            borderRadius: "5px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#4e4e4e",
              color: "#e84a5f",
              boxShadow: "none",
            },
          },
        });
      function ce(e) {
        var t = ie();
        return r.a.createElement(
          "div",
          { className: t.root },
          r.a.createElement(
            le.a,
            { elevation: 3 },
            r.a.createElement("br", null),
            r.a.createElement(N.a, { varient: "p" }, e.desc),
            r.a.createElement("br", null),
            r.a.createElement(
              D.a,
              {
                variant: "contained",
                className: t.btn_1,
                onClick: function () {
                  e.onRouteChange("events");
                },
              },
              e.btn
            )
          )
        );
      }
      var se = a(81),
        me = [
          {
            url: "carousel-two.jpg",
            title: "Event1 registrations open",
            width: "30%",
            link: "events",
          },
          {
            url: "carousel-three.jpg",
            title: "WT notes added",
            width: "30%",
            link: "resources",
          },
          {
            url: "carousel-one.jpg",
            title: "New club on campus!",
            width: "30%",
            link: "clubs",
          },
        ],
        ue = Object(S.a)(function (e) {
          var t;
          return {
            root: {
              display: "flex",
              flexWrap: "wrap",
              minWidth: 300,
              width: "100%",
              justifyContent: "center",
            },
            image:
              ((t = { position: "relative", height: 200, margin: "17px" }),
              Object(d.a)(t, e.breakpoints.down("sm"), {
                width: "100% !important",
                height: 100,
              }),
              Object(d.a)(t, "&:hover, &$focusVisible", {
                zIndex: 1,
                "& $imageBackdrop": { opacity: 0.5 },
                "& $imageMarked": { opacity: 0 },
                "& $imageTitle": { border: "4px solid currentColor" },
              }),
              t),
            focusVisible: {},
            imageButton: {
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: e.palette.common.white,
            },
            imageSrc: {
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
            },
            imageBackdrop: {
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundColor: e.palette.common.black,
              opacity: 0.4,
              transition: e.transitions.create("opacity"),
            },
            imageTitle: {
              position: "relative",
              padding: ""
                .concat(e.spacing(2), "px ")
                .concat(e.spacing(4), "px ")
                .concat(e.spacing(1) + 6, "px"),
            },
            imageMarked: {
              height: 3,
              width: 18,
              backgroundColor: e.palette.common.white,
              position: "absolute",
              bottom: -2,
              left: "calc(50% - 9px)",
              transition: e.transitions.create("opacity"),
            },
          };
        });
      function de(e) {
        var t = ue();
        return r.a.createElement(
          "div",
          { className: t.root },
          me.map(function (n) {
            return r.a.createElement(
              se.a,
              {
                focusRipple: !0,
                key: n.title,
                className: t.image,
                focusVisibleClassName: t.focusVisible,
                style: { width: n.width },
                component: R.b,
                to: "/".concat(n.link),
                onClick: function () {
                  e.onRouteChange("".concat(n.link));
                },
              },
              r.a.createElement("span", {
                className: t.imageSrc,
                style: {
                  backgroundImage: "url(".concat(
                    a(53)("./".concat(n.url)),
                    ")"
                  ),
                },
              }),
              r.a.createElement("span", { className: t.imageBackdrop }),
              r.a.createElement(
                "span",
                { className: t.imageButton },
                r.a.createElement(
                  N.a,
                  {
                    component: "span",
                    variant: "subtitle1",
                    color: "inherit",
                    className: t.imageTitle,
                  },
                  n.title,
                  r.a.createElement("span", { className: t.imageMarked })
                )
              )
            );
          })
        );
      }
      a(35);
      var pe = function (e) {
          return r.a.createElement(
            "div",
            {
              id: "home",
              style: { color: "white", backgroundColor: "#2d2d2d" },
            },
            r.a.createElement(
              "div",
              { id: "overlay" },
              r.a.createElement(Z, null),
              r.a.createElement(
                oe.a,
                {
                  container: !0,
                  style: { display: "flex", justifyContent: "space-evenly" },
                },
                r.a.createElement(
                  oe.a,
                  { item: !0 },
                  r.a.createElement(re, {
                    img: "dsc.png",
                    name: "Developer Students Club",
                    desc:
                      "Club description.Club description.Club description.\r Club description. Club description. Club desciption.",
                    onRouteChange: e.onRouteChange,
                  })
                ),
                r.a.createElement(
                  oe.a,
                  { item: !0 },
                  r.a.createElement(re, {
                    img: "mozilla.png",
                    name: "Mozilla Firefox Campus Club",
                    desc:
                      "Club description.Club description.Club description.\r Club description. Club description. Club desciption.",
                    onRouteChange: e.onRouteChange,
                  })
                ),
                r.a.createElement(
                  oe.a,
                  { item: !0 },
                  r.a.createElement(re, {
                    img: "microsoft.png",
                    name: "Microsoft Student Partners",
                    desc:
                      "Club description.Club description.Club description.\r Club description. Club description. Club desciption.",
                    onRouteChange: e.onRouteChange,
                  })
                )
              ),
              r.a.createElement("br", null),
              r.a.createElement(ce, {
                desc:
                  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at sodales\r odio, vitae consequat magna. Donec hendrerit purus non leo laoreet, imperdiet \r porta ligula placerat. Vivamus molestie nisl diam, vel vestibulum arcu pharetra \r sollicitudin. Suspendisse scelerisque ante et imperdiet tempor. Quisque vitae\r risus non diam auctor lobortis id eu mauris. Pellentesque commodo urna quis\r neque luctus ultricies. Mauris pretium posuere orci, id tincidunt ante \r tincidunt in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at sodales\r odio, vitae consequat magna. Donec hendrerit purus non leo laoreet, imperdiet \r porta ligula placerat. Vivamus molestie nisl diam, vel vestibulum arcu pharetra \r sollicitudin.",
                btn: "Checkout Events now!",
                onRouteChange: e.onRouteChange,
              }),
              r.a.createElement("br", null),
              r.a.createElement(
                N.a,
                { variant: "h5", align: "center", style: { color: "white" } },
                "Recently updated"
              ),
              r.a.createElement("br", null),
              r.a.createElement(de, { onRouteChange: e.onRouteChange }),
              r.a.createElement("br", null),
              r.a.createElement("br", null)
            )
          );
        },
        be = a(127),
        ge = a(5),
        he = a(258),
        fe = a(75),
        Ee = a.n(fe),
        ve = a(76),
        Ce = a.n(ve),
        xe = a(77),
        ye = a.n(xe),
        we = a(78),
        ke = a.n(we),
        je = (function (e) {
          Object(s.a)(n, e);
          var t = Object(m.a)(n);
          function n(e) {
            var a;
            return (
              Object(i.a)(this, n),
              ((a = t.call(this, e)).handleEmailChange = function (e) {
                return a.setState({ email: e.target.value });
              }),
              (a.Copyright = function () {
                return r.a.createElement(
                  N.a,
                  {
                    variant: "body2",
                    color: "textSecondary",
                    style: {
                      textAlign: "center",
                      marginTop: 8,
                      color: "white",
                    },
                  },
                  "Copyright \xa9 ",
                  "Aztechs",
                  " ",
                  new Date().getFullYear(),
                  "."
                );
              }),
              (a.state = { email: "" }),
              a
            );
          }
          return (
            Object(c.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.classes,
                    o = t.route,
                    l = t.loginStatus;
                  return r.a.createElement(
                    "div",
                    { className: n.root, id: "footer" },
                    r.a.createElement(b.a, null),
                    r.a.createElement(
                      X.a,
                      { className: n.a },
                      "signup" === o || "login" === o || l
                        ? null
                        : r.a.createElement(
                            "div",
                            null,
                            r.a.createElement(be.a, {
                              url:
                                "https://gmail.us10.list-manage.com/subscribe/post?u=471004c5f312ad1088d346627&amp;id=ef035ee544",
                              render: function (t) {
                                var a = t.subscribe,
                                  o = t.status;
                                return r.a.createElement(
                                  "div",
                                  null,
                                  r.a.createElement(
                                    "div",
                                    { className: n.newsletter },
                                    r.a.createElement(
                                      "div",
                                      null,
                                      r.a.createElement(
                                        N.a,
                                        { variant: "h6" },
                                        " Be the first to get updates!"
                                      ),
                                      r.a.createElement(
                                        N.a,
                                        { variant: "body2" },
                                        "Subscribe and join our newletter today."
                                      )
                                    ),
                                    r.a.createElement(he.a, {
                                      id: "outlined-basic",
                                      variant: "filled",
                                      label: "Email",
                                      type: "text",
                                      className: " ".concat(n.email),
                                      color: "secondary",
                                      value: e.state.email,
                                      onChange: e.handleEmailChange,
                                    }),
                                    r.a.createElement(
                                      D.a,
                                      {
                                        variant: "contained",
                                        onClick: function () {
                                          var t = { EMAIL: e.state.email };
                                          a(t);
                                        },
                                        className:
                                          "success" === o
                                            ? n.hide_btn
                                            : n.btn_1,
                                      },
                                      "Subscribe"
                                    )
                                  ),
                                  "success" === o
                                    ? r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                          N.a,
                                          {
                                            variant: "body1",
                                            className: n.resp,
                                          },
                                          "Thank you for subscribing.Check your email for latest updates"
                                        ),
                                        r.a.createElement("br", null)
                                      )
                                    : null,
                                  "sending" === o
                                    ? r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                          N.a,
                                          {
                                            variant: "body2",
                                            className: n.resp,
                                            style: { color: "#bfbfbf" },
                                          },
                                          "Subscribing..."
                                        ),
                                        r.a.createElement("br", null)
                                      )
                                    : null,
                                  "error" === o
                                    ? r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                          N.a,
                                          {
                                            variant: "body2",
                                            className: n.resp,
                                            style: { color: "#e84a5f" },
                                          },
                                          "Something went wrong. Please try again or use a different email id."
                                        ),
                                        r.a.createElement("br", null)
                                      )
                                    : null
                                );
                              },
                            }),
                            r.a.createElement(g.a, {
                              variant: "middle",
                              style: { backgroundColor: "#4e4e4e" },
                            })
                          ),
                      r.a.createElement(
                        "div",
                        { className: n.info },
                        r.a.createElement(
                          "div",
                          null,
                          r.a.createElement(N.a, { variant: "body1" }, "About"),
                          r.a.createElement(
                            N.a,
                            { variant: "body2" },
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum volutpat sem, nec tincidunt mi laoreet et vestibulum."
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: n.two },
                          r.a.createElement(
                            N.a,
                            { variant: "body1" },
                            "Information"
                          ),
                          r.a.createElement(
                            N.a,
                            { variant: "body2" },
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum volutpat sem, nec tincidunt mi laoreet et."
                          )
                        )
                      ),
                      r.a.createElement(g.a, { variant: "middle" }),
                      r.a.createElement(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            marginTop: 5,
                            marginBotton: 10,
                            alignItems: "center",
                          },
                        },
                        r.a.createElement("img", {
                          src: a(64),
                          height: "35",
                          width: "35",
                          style: { marginLeft: 65 },
                          alt: "logo",
                        }),
                        r.a.createElement(g.a, {
                          orientation: "vertical",
                          flexItem: !0,
                          style: {
                            marginLeft: 45,
                            marginRight: 35,
                            backgroundColor: "#4e4e4e",
                          },
                        }),
                        r.a.createElement(Ee.a, { className: n.icons }),
                        "\u2002",
                        r.a.createElement(Ce.a, { className: n.icons }),
                        "\u2002",
                        r.a.createElement(ye.a, { className: n.icons }),
                        "\u2002",
                        r.a.createElement(ke.a, { className: n.icons }),
                        r.a.createElement("br", null),
                        r.a.createElement("br", null)
                      ),
                      this.Copyright()
                    )
                  );
                },
              },
            ]),
            n
          );
        })(n.Component),
        Ne = Object(ge.a)(function (e) {
          return {
            root: {
              "& .MuiButton-root": { paddingTop: 0 },
              "& .MuiTextField-root": { color: "white" },
            },
            main: { marginTop: e.spacing(8), marginBottom: e.spacing(2) },
            footer: {
              padding: e.spacing(3, 2),
              marginTop: "auto",
              textAlign: "center",
              backgroundColor:
                "light" === e.palette.type
                  ? e.palette.grey[200]
                  : e.palette.grey[800],
            },
            a: { backgroundColor: "#131313" },
            newsletter: Object(d.a)(
              {
                padding: "2% 3%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                textAlign: "center",
                border: 0,
                color: "white",
              },
              e.breakpoints.down("sm"),
              { flexDirection: "column", alignItems: "center" }
            ),
            email: {
              width: "45%",
              height: "47px",
              color: "white",
              backgroundColor: "#bfbfbf",
              borderRadius: "7px",
            },
            btn_1: Object(d.a)(
              {
                backgroundColor: "#e84a5f",
                paddingTop: e.spacing(0),
                paddingBottom: e.spacing(0),
                marginTop: e.spacing(0),
                borderRadius: "5px",
                boxShadow: "none",
                height: "40px",
                "&:hover": {
                  backgroundColor: "#131313",
                  color: "#e84a5f",
                  boxShadow: "none",
                },
              },
              e.breakpoints.down("sm"),
              { marginTop: 10 }
            ),
            info: Object(d.a)(
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                border: 0,
                backgroundColor: "#181818",
                color: "white",
                padding: "3% 18%",
              },
              e.breakpoints.down("sm"),
              { flexDirection: "column" }
            ),
            two: Object(d.a)({}, e.breakpoints.down("sm"), { marginTop: 10 }),
            icons: { fontSize: 25, color: "white" },
            hide_btn: { display: "none" },
            resp: { color: "white", textAlign: "center" },
          };
        })(je),
        Se = a(43),
        Oe = a(118);
      var Re = Object(ge.a)(function (e) {
          return {
            root: Object(Oe.a)(
              { "& .MuiPaper-root": { backgroundColor: "#2d2d2d" } },
              e.mixins.gutters(),
              {
                paddingTop: e.spacing(6),
                marginTop: 40,
                marginBottom: 0,
                paddingBottom: 23,
                backgroundColor: "#2d2d2d",
                color: "white",
              }
            ),
            title: Object(d.a)({ marginLeft: 190 }, e.breakpoints.down("xs"), {
              marginLeft: 0,
              "& .Title-root": { backgroundColor: "#2d2d2d" },
            }),
          };
        })(function (e) {
          var t = e.classes;
          return r.a.createElement(
            "div",
            { className: t.title },
            r.a.createElement(
              le.a,
              { className: t.root, elevation: 0 },
              r.a.createElement(N.a, { variant: "h4", align: "center" }, e.name)
            )
          );
        }),
        De = a(253),
        Te = (function (e) {
          Object(s.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleEmailChange = function (e) {
                return n.setState({ email: e.target.value });
              }),
              (n.handlePwdChange = function (e) {
                return n.setState({ password: e.target.value });
              }),
              (n.handleData = function () {
                fetch("https://test-express-app-2801.herokuapp.com/login", {
                  method: "post",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    email: n.state.email,
                    password: n.state.password,
                  }),
                })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    e._id &&
                      (n.props.onRouteChange("user"),
                      n.props.loadUser(e),
                      n.props.loggedIn(!0));
                  })
                  .catch(function (e) {
                    n.setState({ err: !0 }), console.log("idar tak aaya mai");
                  });
              }),
              (n.state = { email: "", password: "", err: !1 }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.a.createElement(
                    "div",
                    { style: { backgroundColor: "#2d2d2d", color: "white" } },
                    r.a.createElement(Re, { name: "Login" }),
                    r.a.createElement(
                      "div",
                      { id: "login" },
                      r.a.createElement(
                        oe.a,
                        {
                          container: !0,
                          style: { display: "flex", justifyContent: "center" },
                        },
                        r.a.createElement(
                          oe.a,
                          { item: !0, md: 5, xs: 10 },
                          r.a.createElement(
                            "form",
                            { noValidate: !0, autoComplete: "off" },
                            r.a.createElement(
                              De.a,
                              null,
                              r.a.createElement(he.a, {
                                id: "outlined-username-input",
                                label: "Email",
                                type: "text",
                                variant: "filled",
                                className: "email-input",
                                value: this.state.email,
                                onChange: this.handleEmailChange,
                                color: "secondary",
                                InputProps: {
                                  style: {
                                    backgroundColor: "#bfbfbf",
                                    borderRadius: 7,
                                  },
                                },
                                required: !0,
                              }),
                              r.a.createElement("br", null),
                              r.a.createElement(he.a, {
                                id: "filled-password-input",
                                label: "Password",
                                type: "password",
                                value: this.state.password,
                                onChange: this.handlePwdChange,
                                autoComplete: "current-password",
                                variant: "filled",
                                color: "secondary",
                                InputProps: {
                                  style: {
                                    backgroundColor: "#bfbfbf",
                                    borderRadius: 7,
                                  },
                                },
                                required: !0,
                              }),
                              r.a.createElement("br", null),
                              r.a.createElement(
                                D.a,
                                {
                                  variant: "contained",
                                  onClick: this.handleData,
                                  style: {
                                    width: 180,
                                    alignSelf: "center",
                                    backgroundColor: "#e84a5f",
                                    color: "#131313",
                                  },
                                  component: R.b,
                                  to: "/user",
                                },
                                "Login"
                              ),
                              r.a.createElement("br", null),
                              r.a.createElement("br", null),
                              r.a.createElement("br", null),
                              r.a.createElement("br", null),
                              r.a.createElement(
                                N.a,
                                { align: "center" },
                                "Don't have an account yet??"
                              ),
                              r.a.createElement(
                                D.a,
                                {
                                  color: "default",
                                  component: R.b,
                                  to: "/signup",
                                  style: {
                                    width: 150,
                                    alignSelf: "center",
                                    backgroundColor: "#bfbfbf",
                                    color: "#000",
                                  },
                                  onClick: function () {
                                    e.props.onRouteChange("signup");
                                  },
                                },
                                "Signup Now"
                              )
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement("br", null),
                    r.a.createElement("br", null),
                    r.a.createElement("br", null),
                    r.a.createElement("br", null)
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        _e = a(264),
        Ie = Object(S.a)(function (e) {
          return {
            root: {
              maxWidth: "100%",
              display: "flex",
              justifyContent: "center",
              marginBottom: 90,
            },
            media: {
              position: "relative",
              width: "100vw",
              height: 320,
              backgroundSize: "cover",
              boxShadow: "2px 2px 6px #000",
            },
            large: {
              position: "absolute",
              top: 210,
              left: "auto",
              width: e.spacing(25),
              height: e.spacing(25),
              margin: 0,
              padding: 0,
              boxShadow: "2px 2px 8px #000",
            },
            info: { margin: "auto 5%", backgroundColor: "#2d2d2d" },
            btn_1: {
              backgroundColor: "#e84a5f",
              borderRadius: "5px",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#2d2d2d",
                color: "#e84a5f",
                boxShadow: "none",
              },
            },
          };
        });
      function Pe(e) {
        var t = Ie(),
          n = e.username;
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            "div",
            { className: t.banner },
            r.a.createElement(
              X.a,
              { className: t.root },
              r.a.createElement(ae.a, { className: t.media, image: a(83) }),
              r.a.createElement(_e.a, {
                alt: "Remy Sharp",
                src: a(84),
                className: t.large,
              })
            ),
            r.a.createElement(
              N.a,
              {
                variant: "h5",
                align: "center",
                style: { marginTop: 17, color: "#8694ad" },
              },
              n
            ),
            r.a.createElement("br", null),
            r.a.createElement(
              N.a,
              { variant: "body1", align: "center", className: t.info },
              "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            ),
            r.a.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 23,
                  marginBottom: 15,
                },
              },
              r.a.createElement(
                D.a,
                { variant: "contained", className: t.btn_1 },
                "Edit profile"
              )
            )
          )
        );
      }
      var Le = a(119),
        Ae = a.n(Le),
        ze =
          (a(173),
          Object(S.a)({
            root: {
              minWidth: 240,
              marginTop: "40px",
              border: ".5px solid #181818",
              "&:hover": { backgroundColor: "#4d4d4d" },
              marginRight: 12,
              backgroundColor: "#4e4e4e",
              color: "white",
            },
            img: { height: 150, width: 240, alignSelf: "center" },
            content_card: { textAlign: "center" },
          })),
        Be = function (e) {
          var t = ze();
          return r.a.createElement(
            X.a,
            { className: t.root },
            r.a.createElement(
              "div",
              { style: { display: "flex", justifyContent: "center" } },
              r.a.createElement(ae.a, {
                className: " ".concat(t.img),
                image: a(174)("./".concat(e.img, ".jpg")),
              })
            ),
            r.a.createElement(
              te.a,
              { className: t.content_card },
              r.a.createElement(
                N.a,
                { variant: "h5", component: "h2", style: { color: "white" } },
                e.name
              ),
              r.a.createElement(
                N.a,
                {
                  variant: "body2",
                  component: "p",
                  style: { color: "#bfbfbf" },
                },
                e.date,
                r.a.createElement("br", null),
                e.time,
                r.a.createElement("br", null),
                e.place
              )
            )
          );
        },
        Me = [
          {
            name: "event1",
            date: "1/1/2020",
            place: "Online",
            time: "10:00am to 1:00pm",
            img: "carousel-one",
          },
          {
            name: "event2",
            date: "2/1/2020",
            place: "Auditorium",
            time: "12:00pm to 2:00pm",
            img: "carousel-two",
          },
          {
            name: "event3",
            date: "3/1/2020",
            place: "5th floor auditorium",
            time: "3:00pm to 4:00pm",
            img: "carousel-three",
          },
          {
            name: "event4",
            date: "4/1/2020",
            place: "Auditorium",
            time: "10:00am to 11:00am",
            img: "carousel-one",
          },
        ],
        Ue = function (e) {
          var t = e.name;
          return r.a.createElement(
            "div",
            { className: "scroll-menu-arrows" },
            t
          );
        },
        We = Ue({ name: "<", className: "arrow-prev" }),
        qe = Ue({ name: ">", className: "arrow-next" }),
        He = (function (e) {
          Object(s.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            Object(i.a)(this, a);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = { selected: 0 }),
              (e.onSelect = function (t) {
                e.setState({ selected: t });
              }),
              e
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.state.selected,
                    t = Me.map(function (e) {
                      var t = e.name,
                        a = e.date,
                        n = e.time,
                        o = e.place,
                        l = e.img;
                      return r.a.createElement(Be, {
                        name: t,
                        key: t,
                        date: a,
                        time: n,
                        place: o,
                        img: l,
                      });
                    });
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(Ae.a, {
                      data: t,
                      arrowLeft: We,
                      arrowRight: qe,
                      selected: e,
                      onSelect: this.onSelect,
                      wheel: !0,
                      dragging: !0,
                    }),
                    r.a.createElement("br", null),
                    r.a.createElement("br", null),
                    r.a.createElement("br", null)
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Ve = Object(S.a)(function (e) {
          return {
            root: {
              textAlign: "center",
              marginTop: 40,
              backgroundColor: "#2d2d2d",
              color: "white",
            },
            container: Object(d.a)(
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              },
              e.breakpoints.down("sm"),
              { flexDirection: "column" }
            ),
            row: Object(d.a)(
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              },
              e.breakpoints.down("sm"),
              { justifyContent: "center" }
            ),
            title: Object(d.a)(
              { color: "#bfbfbf", fontSize: "20px", marginTop: "10px" },
              e.breakpoints.down("sm"),
              { marginTop: "10px" }
            ),
            text: Object(d.a)(
              { fontSize: "16px", marginTop: "10px" },
              e.breakpoints.down("sm"),
              { marginTop: "10px" }
            ),
            club: { marginTop: "10px", fontSize: "18px", fontWeight: "400" },
            media: { width: 300, height: 170 },
            events: {
              marginTop: "30px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              textAlign: "left",
              border: 0,
              boxShadow: "none",
            },
            club_info: Object(d.a)(
              { textAlign: "left" },
              e.breakpoints.down("sm"),
              { textAlign: "center" }
            ),
          };
        });
      function Fe(e) {
        var t = Ve(),
          a = e.email,
          n = e.name,
          o = e.phone,
          l = e.department;
        return r.a.createElement(
          X.a,
          { className: t.root },
          r.a.createElement("br", null),
          r.a.createElement(N.a, { variant: "h5" }, "Personal Details"),
          r.a.createElement("br", null),
          r.a.createElement(
            "div",
            { className: t.container },
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "div",
                { className: t.row },
                r.a.createElement("br", null),
                r.a.createElement("br", null),
                r.a.createElement(N.a, { className: t.title }, "Name:"),
                "\xa0\xa0",
                r.a.createElement(N.a, { className: t.text }, n)
              ),
              r.a.createElement(
                "div",
                { className: t.row },
                r.a.createElement(N.a, { className: t.title }, "Email:"),
                "\xa0\xa0",
                r.a.createElement(N.a, { className: t.text }, a)
              ),
              r.a.createElement(
                "div",
                { className: t.row },
                r.a.createElement(N.a, { className: t.title }, "Phone:"),
                "\xa0\xa0",
                r.a.createElement(N.a, { className: t.text }, o)
              ),
              r.a.createElement(
                "div",
                { className: t.row },
                r.a.createElement(N.a, { className: t.title }, "Department:"),
                "\xa0\xa0",
                r.a.createElement(N.a, { className: t.text }, l)
              ),
              r.a.createElement("br", null)
            ),
            r.a.createElement(g.a, {
              orientation: "vertical",
              flexItem: !0,
              style: {
                backgroundColor: "#131313",
                width: "2px",
                marginRight: 40,
                marginLeft: 5,
              },
            }),
            r.a.createElement(
              "div",
              { className: t.club_info },
              r.a.createElement(
                N.a,
                { className: "".concat(t.title) },
                "Clubs joined:"
              ),
              r.a.createElement(
                N.a,
                { className: t.club },
                "Developer Students Club"
              ),
              r.a.createElement(N.a, { variant: "body2" }, "Organizer"),
              r.a.createElement(N.a, { className: t.club }, "Mozilla club"),
              r.a.createElement(N.a, { variant: "body2" }, "Designer")
            )
          ),
          r.a.createElement("br", null),
          r.a.createElement("br", null),
          r.a.createElement(g.a, {
            variant: "middle",
            style: { backgroundColor: "#4e4e4e" },
          }),
          r.a.createElement("br", null),
          r.a.createElement("br", null),
          r.a.createElement(N.a, { variant: "h5" }, "Registered events"),
          r.a.createElement(He, null)
        );
      }
      var Je = Object(S.a)({
        root: { backgroundColor: "#2d2d2d", color: "white" },
      });
      var Ge = function (e) {
          var t = Je();
          return r.a.createElement(
            "div",
            { id: "user", className: t.root },
            r.a.createElement(Pe, { username: e.user.username }),
            r.a.createElement(Fe, {
              email: e.user.email,
              name: e.user.name,
              phone: e.user.phone,
              department: e.user.department,
            })
          );
        },
        Qe = (function (e) {
          Object(s.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleNameChange = function (e) {
                return n.setState({ name: e.target.value });
              }),
              (n.handlePwdChange = function (e) {
                return n.setState({ password: e.target.value });
              }),
              (n.handleEmailChange = function (e) {
                return n.setState({ email: e.target.value });
              }),
              (n.handleUserChange = function (e) {
                return n.setState({ username: e.target.value });
              }),
              (n.handlePhoneChange = function (e) {
                return n.setState({ phone: e.target.value });
              }),
              (n.handleDepartmentChange = function (e) {
                return n.setState({ department: e.target.value });
              }),
              (n.handleData = function () {
                (n.state.email || n.state.password || n.state.name) &&
                  fetch("url/signup", {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      email: n.state.email,
                      password: n.state.password,
                      name: n.state.name,
                      username: n.state.username,
                      department: n.state.department,
                      phone: n.state.phone,
                    }),
                  })
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      e &&
                        (n.props.loadUser(e),
                        n.props.onRouteChange("user"),
                        n.props.loggedIn(!0));
                    });
              }),
              (n.state = {
                name: "",
                username: "",
                email: "",
                password: "",
                phone: "",
                department: "",
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.a.createElement(
                    "div",
                    { style: { backgroundColor: "#2d2d2d", color: "white" } },
                    r.a.createElement(Re, { name: "Signup" }),
                    r.a.createElement(
                      "div",
                      { id: "signup" },
                      r.a.createElement(
                        oe.a,
                        {
                          container: !0,
                          style: { display: "flex", justifyContent: "center" },
                        },
                        r.a.createElement(
                          oe.a,
                          { item: !0, md: 5, xs: 10 },
                          r.a.createElement(
                            "form",
                            { noValidate: !0, autoComplete: "off" },
                            r.a.createElement(
                              De.a,
                              null,
                              r.a.createElement(he.a, {
                                id: "filled-name-input",
                                label: "Full name",
                                type: "text",
                                variant: "filled",
                                value: this.state.name,
                                onChange: this.handleNameChange,
                                required: !0,
                                color: "secondary",
                                InputProps: {
                                  style: {
                                    backgroundColor: "#bfbfbf",
                                    borderRadius: 7,
                                  },
                                },
                              }),
                              r.a.createElement("br", null),
                              r.a.createElement(he.a, {
                                id: "filled-username-input",
                                label: "Username",
                                type: "text",
                                variant: "filled",
                                value: this.state.username,
                                onChange: this.handleUserChange,
                                color: "secondary",
                                InputProps: {
                                  style: {
                                    backgroundColor: "#bfbfbf",
                                    borderRadius: 7,
                                  },
                                },
                              }),
                              r.a.createElement("br", null),
                              r.a.createElement(he.a, {
                                id: "filled-phone-input",
                                label: "Phone",
                                type: "text",
                                variant: "filled",
                                value: this.state.phone,
                                onChange: this.handlePhoneChange,
                                color: "secondary",
                                InputProps: {
                                  style: {
                                    backgroundColor: "#bfbfbf",
                                    borderRadius: 7,
                                  },
                                },
                              }),
                              r.a.createElement("br", null),
                              r.a.createElement(he.a, {
                                id: "filled-department-input",
                                label: "Department",
                                type: "text",
                                variant: "filled",
                                value: this.state.department,
                                onChange: this.handleDepartmentChange,
                                color: "secondary",
                                InputProps: {
                                  style: {
                                    backgroundColor: "#bfbfbf",
                                    borderRadius: 7,
                                  },
                                },
                              }),
                              r.a.createElement("br", null),
                              r.a.createElement(he.a, {
                                id: "filled-email-input",
                                label: "Email",
                                type: "email",
                                variant: "filled",
                                value: this.state.email,
                                onChange: this.handleEmailChange,
                                color: "secondary",
                                InputProps: {
                                  style: {
                                    backgroundColor: "#bfbfbf",
                                    borderRadius: 7,
                                  },
                                },
                                required: !0,
                              }),
                              r.a.createElement("br", null),
                              r.a.createElement(he.a, {
                                id: "filled-password-input",
                                label: "Password",
                                type: "password",
                                variant: "filled",
                                value: this.state.password,
                                onChange: this.handlePwdChange,
                                color: "secondary",
                                InputProps: {
                                  style: {
                                    backgroundColor: "#bfbfbf",
                                    borderRadius: 7,
                                  },
                                },
                                required: !0,
                              }),
                              r.a.createElement("br", null),
                              r.a.createElement("br", null),
                              r.a.createElement(
                                D.a,
                                {
                                  variant: "contained",
                                  onClick: this.handleData,
                                  component: R.b,
                                  to: "/user",
                                  style: {
                                    width: 180,
                                    alignSelf: "center",
                                    backgroundColor: "#e84a5f",
                                    color: "#131313",
                                  },
                                },
                                "Signup"
                              ),
                              r.a.createElement("br", null),
                              r.a.createElement("br", null),
                              r.a.createElement(
                                N.a,
                                { align: "center" },
                                "Already have an account??"
                              ),
                              r.a.createElement(
                                D.a,
                                {
                                  component: R.b,
                                  to: "/login",
                                  style: {
                                    width: 150,
                                    alignSelf: "center",
                                    backgroundColor: "#bfbfbf",
                                    color: "#000",
                                  },
                                  onClick: function () {
                                    e.props.onRouteChange("login");
                                  },
                                },
                                "Login Now"
                              )
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement("br", null),
                    r.a.createElement("br", null),
                    r.a.createElement("br", null),
                    r.a.createElement("br", null),
                    r.a.createElement("br", null)
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        $e = a(3),
        Ke = a(254),
        Ye = a(256),
        Ze = a(120),
        Xe = a.n(Ze),
        et = a(121),
        tt = a.n(et),
        at = a(122),
        nt = a.n(at),
        rt = a(255),
        ot = Object(S.a)(function (e) {
          return {
            root: {
              maxWidth: 330,
              marginBottom: "24px",
              boxShadow: "2px 2px 6px #181818",
              backgroundColor: "#4e4e4e",
              color: "white",
              "&:hover": { backgroundColor: "#3f3f3f" },
            },
            media: { height: 0, paddingTop: "45.25%" },
            datetime: { color: "white" },
            expand: {
              transform: "rotate(0deg)",
              marginLeft: "auto",
              transition: e.transitions.create("transform", {
                duration: e.transitions.duration.shortest,
              }),
            },
            expandOpen: { transform: "rotate(180deg)" },
            avatar: {
              backgroundColor: "#4e4e4e",
              width: e.spacing(6),
              height: e.spacing(6),
            },
            link: { "&:hover": { textDecoration: "none" } },
            red: { color: "#e84a5f" },
            btn_1: {
              backgroundColor: "#e84a5f",
              marginRight: "10px",
              borderRadius: "5px",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#3f3f3f",
                color: "#e84a5f",
                boxShadow: "none",
              },
            },
          };
        });
      function lt(e) {
        var t = ot(),
          n = r.a.useState(!1),
          o = Object(u.a)(n, 2),
          l = o[0],
          i = o[1],
          c = r.a.useState(!1),
          s = Object(u.a)(c, 2),
          m = s[0],
          p = s[1];
        return r.a.createElement(
          X.a,
          { className: t.root },
          r.a.createElement(Ke.a, {
            className: t.datetime,
            avatar: r.a.createElement(
              _e.a,
              { className: t.avatar, src: a(53)("./".concat(e.logo)) },
              e.name
            ),
            action: r.a.createElement(
              "div",
              null,
              r.a.createElement(
                E.a,
                {
                  "aria-label": "add to favorites",
                  onClick: function () {
                    p(!m);
                  },
                },
                r.a.createElement(Xe.a, { className: m ? t.red : null })
              ),
              r.a.createElement(
                rt.a,
                {
                  href: "https://www.google.com/forms/about/",
                  target: "_blank",
                  rel: "noopener",
                },
                r.a.createElement(
                  E.a,
                  { "aria-label": "share" },
                  r.a.createElement(tt.a, null)
                )
              )
            ),
            title: r.a.createElement(N.a, { variant: "h6" }, e.event),
            subheader: r.a.createElement(
              N.a,
              { variant: "body2", style: { color: "white" } },
              e.dateTime
            ),
          }),
          r.a.createElement(ae.a, {
            className: t.media,
            image: a(53)("./".concat(e.pic)),
          }),
          r.a.createElement(
            te.a,
            null,
            r.a.createElement(N.a, { variant: "body2", component: "p" }, e.desc)
          ),
          r.a.createElement(
            ee.a,
            { disableSpacing: !0 },
            r.a.createElement(
              rt.a,
              {
                href: "https://www.google.com/forms/about/",
                target: "_blank",
                rel: "noopener",
                className: t.link,
              },
              "\xa0\xa0",
              r.a.createElement(
                D.a,
                { size: "small", variant: "contained", className: t.btn_1 },
                "Register now!"
              )
            ),
            r.a.createElement(
              E.a,
              {
                className: Object($e.a)(
                  t.expand,
                  Object(d.a)({}, t.expandOpen, l)
                ),
                onClick: function () {
                  i(!l);
                },
                "aria-expanded": l,
                "aria-label": "show more",
                style: { color: "white" },
              },
              r.a.createElement(nt.a, null)
            )
          ),
          r.a.createElement(
            Ye.a,
            { in: l, timeout: "auto", unmountOnExit: !0 },
            r.a.createElement(
              te.a,
              null,
              r.a.createElement(N.a, { paragraph: !0 }, "Event organizers:"),
              r.a.createElement(N.a, { paragraph: !0 }, "Event description")
            )
          )
        );
      }
      var it = function () {
          return r.a.createElement(
            "div",
            { style: { backgroundColor: "#2d2d2d" } },
            r.a.createElement(Re, { name: "Events" }),
            r.a.createElement(
              "div",
              { id: "events" },
              r.a.createElement(
                oe.a,
                {
                  container: !0,
                  style: { display: "flex", justifyContent: "space-around" },
                },
                r.a.createElement(
                  oe.a,
                  { item: !0 },
                  r.a.createElement(lt, {
                    name: "A",
                    event: "Event 1",
                    dateTime: "April 28 2020, 10:00am to 12:00pm",
                    pic: "carousel-one.jpg",
                    desc:
                      "Event description.Event description.\r Event description. Event description. Event desciption.",
                    logo: "dsc.png",
                  })
                ),
                r.a.createElement(
                  oe.a,
                  { item: !0 },
                  r.a.createElement(lt, {
                    name: "B",
                    event: "Event 2",
                    dateTime: "May 29 2020, 11:00am to 1:00pm",
                    pic: "carousel-two.jpg",
                    desc:
                      "Event description.Event description.\r Event description. Event description. Event desciption.",
                    logo: "microsoft.png",
                  })
                ),
                r.a.createElement(
                  oe.a,
                  { item: !0 },
                  r.a.createElement(lt, {
                    name: "C",
                    event: "Event 3",
                    dateTime: "June 30 2020, 12:00pm to 2:00pm",
                    pic: "carousel-three.jpg",
                    desc:
                      "Event description.Event description.\r Event description. Event description. Event desciption.",
                    logo: "mozilla.png",
                  })
                )
              ),
              r.a.createElement("br", null),
              r.a.createElement("br", null)
            )
          );
        },
        ct = a(80),
        st = a.n(ct),
        mt = a(247),
        ut = Object(S.a)(function (e) {
          return {
            large: { width: 350, height: "auto", marginBottom: 20 },
            small: {
              width: 260,
              height: "auto",
              marginBottom: 40,
              textAlign: "center",
            },
            btn_1: Object(d.a)(
              {
                backgroundColor: "#e84a5f",
                marginRight: "10px",
                borderRadius: "5px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#2d2d2d",
                  color: "#e84a5f",
                  boxShadow: "none",
                  textDecoration: "none",
                },
              },
              e.breakpoints.down("sm"),
              { padding: "2px 8px" }
            ),
            hr: {
              marginTop: 0,
              height: "4px",
              backgroundColor: "white",
              width: "60%",
            },
            h1: { textAlign: "center", color: "white" },
            back: {
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              color: "white",
              height: "inherit",
              boxShadow: "none",
              border: 0,
            },
          };
        }),
        dt = function (e) {
          var t = Object(mt.a)("(min-width:600px)"),
            n = ut(),
            o = e.name,
            l = e.img,
            i = e.desc,
            c = e.title,
            s = e.onRouteChange;
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              st.a,
              {
                flipOnHover: t,
                flipOnClick: !t,
                flipDirection: "horizontal",
                className: t ? n.large : n.small,
              },
              r.a.createElement(
                ct.FrontSide,
                {
                  style: {
                    backgroundImage: " url(".concat(a(53)("./".concat(l)), ")"),
                    backgroundSize: "cover",
                    boxShadow: "2px 2px 8px #000",
                  },
                },
                r.a.createElement("br", null),
                r.a.createElement("br", null),
                r.a.createElement("br", null),
                r.a.createElement(
                  "div",
                  { style: { backgroundColor: "rgba(0,0,0,0.3)" } },
                  r.a.createElement("hr", { className: n.hr }),
                  r.a.createElement("h1", { className: n.h1 }, c),
                  r.a.createElement("hr", { className: n.hr })
                )
              ),
              r.a.createElement(
                ct.BackSide,
                { className: n.back },
                r.a.createElement(N.a, { variant: "h5" }, o),
                r.a.createElement("br", null),
                r.a.createElement(
                  N.a,
                  { variant: "body2", align: "center" },
                  i
                ),
                r.a.createElement("br", null),
                r.a.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                    },
                  },
                  r.a.createElement(
                    rt.a,
                    {
                      href: "https://www.google.com/forms/about/",
                      target: "_blank",
                      rel: "noopener",
                      style: { textDecoration: "none" },
                    },
                    r.a.createElement(
                      D.a,
                      {
                        size: "small",
                        variant: "contained",
                        className: n.btn_1,
                      },
                      "Join Club!"
                    )
                  ),
                  "\u2002",
                  r.a.createElement(
                    D.a,
                    {
                      size: "small",
                      variant: "contained",
                      className: n.btn_1,
                      component: rt.a,
                      to: "/events",
                      onClick: function () {
                        s("events");
                      },
                    },
                    "Checkout events!"
                  )
                )
              )
            ),
            r.a.createElement("br", null),
            t
              ? null
              : r.a.createElement("div", null, r.a.createElement("br", null))
          );
        };
      var pt = function (e) {
          return r.a.createElement(
            "div",
            { style: { backgroundColor: "#2d2d2d" } },
            r.a.createElement(Re, { name: "Clubs" }),
            r.a.createElement(
              "div",
              { id: "clubs" },
              r.a.createElement(
                oe.a,
                {
                  container: !0,
                  style: {
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                  },
                },
                r.a.createElement(
                  oe.a,
                  { item: !0, md: 5, xs: 11 },
                  r.a.createElement(dt, {
                    name: "Developer Students Club",
                    title: "Developer Students Club",
                    desc:
                      "Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.",
                    img: "carousel-three.jpg",
                    onRouteChange: e.onRouteChange,
                  })
                ),
                r.a.createElement(
                  oe.a,
                  { item: !0, md: 5, xs: 11 },
                  r.a.createElement(dt, {
                    name: "Mozilla Firefox Campus Club",
                    title: "Mozilla Firefox Campus Club",
                    desc:
                      "Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.",
                    img: "carousel-two.jpg",
                    onRouteChange: e.onRouteChange,
                  })
                )
              ),
              r.a.createElement(
                oe.a,
                {
                  container: !0,
                  style: {
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                  },
                },
                r.a.createElement(
                  oe.a,
                  { item: !0, md: 5, xs: 11 },
                  r.a.createElement(dt, {
                    name: "Microsoft student partners",
                    title: "Microsoft student partners",
                    desc:
                      "Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.",
                    img: "carousel-one.jpg",
                    onRouteChange: e.onRouteChange,
                  })
                ),
                r.a.createElement(
                  oe.a,
                  { item: !0, md: 5, xs: 11 },
                  r.a.createElement(dt, {
                    name: "ACM Club",
                    title: "ACM Club",
                    desc:
                      "Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.Club description.\r Club description. Club description. Club desciption.\r Club description.",
                    img: "carousel-two.jpg",
                    onRouteChange: e.onRouteChange,
                  })
                )
              )
            ),
            r.a.createElement("br", null),
            r.a.createElement("br", null)
          );
        },
        bt = a(128),
        gt = a(260),
        ht = a(257),
        ft = a(259),
        Et = Object(S.a)(function (e) {
          return {
            root: {
              marginRight: "30px",
              marginLeft: "30px",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              backgroundColor: e.palette.background.paper,
            },
            panel: { boxShadow: "1px 1px 4px #000", padding: "10px" },
            media: {
              marginTop: "10px",
              height: 250,
              width: 220,
              marginRight: "27px",
            },
            note_img: Object(d.a)(
              { display: "flex", flexDirection: "row" },
              e.breakpoints.down("sm"),
              { flexDirection: "column" }
            ),
          };
        });
      function vt(e) {
        var t = Et();
        return r.a.createElement(
          "div",
          null,
          r.a.createElement("br", null),
          r.a.createElement(N.a, { variant: "h4", align: "center" }, e.topic),
          r.a.createElement("br", null),
          r.a.createElement(N.a, { variant: "p" }, e.intro),
          r.a.createElement("br", null),
          r.a.createElement("br", null),
          r.a.createElement(N.a, { variant: "h5" }, "Course outline"),
          r.a.createElement(
            v.a,
            { component: "nav", "aria-label": "main mailbox folders" },
            e.course.map(function (e) {
              return r.a.createElement(
                C.a,
                null,
                r.a.createElement(y.a, {
                  primary: r.a.createElement(N.a, { variant: "body1" }, e[0]),
                  secondary: r.a.createElement(
                    N.a,
                    { variant: "body2", style: { color: "#bfbfbf" } },
                    e[1]
                  ),
                })
              );
            })
          ),
          r.a.createElement("br", null),
          r.a.createElement(N.a, { variant: "h5" }, "Download notes"),
          r.a.createElement(
            "div",
            { className: t.note_img },
            e.img.map(function (e) {
              return r.a.createElement(
                R.b,
                { to: "/notes/".concat(e[1]), target: "_blank", download: !0 },
                r.a.createElement(ae.a, {
                  className: t.media,
                  image: a(53)("./".concat(e[0])),
                  title: e[2],
                })
              );
            })
          )
        );
      }
      function Ct(e) {
        var t = e.children,
          a = e.value,
          n = e.index,
          o = Object(bt.a)(e, ["children", "value", "index"]);
        return r.a.createElement(
          "div",
          Object.assign(
            {
              role: "tabpanel",
              hidden: a !== n,
              id: "simple-tabpanel-".concat(n),
              "aria-labelledby": "simple-tab-".concat(n),
            },
            o
          ),
          a === n &&
            r.a.createElement(ft.a, { p: 3 }, r.a.createElement(N.a, null, t))
        );
      }
      function xt(e) {
        return {
          id: "simple-tab-".concat(e),
          "aria-controls": "simple-tabpanel-".concat(e),
        };
      }
      var yt = Object(S.a)(function (e) {
        return {
          root: {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            backgroundColor: "#4e4e4e",
          },
          panel: { boxShadow: "1px 1px 4px #000", padding: "10px" },
          media: {
            marginTop: "10px",
            height: 230,
            width: 200,
            paddingTop: "3%",
          },
        };
      });
      function wt() {
        var e = yt(),
          t = r.a.useState(0),
          a = Object(u.a)(t, 2),
          n = a[0],
          o = a[1];
        return r.a.createElement(
          "div",
          { className: e.root },
          r.a.createElement(
            p.a,
            {
              position: "static",
              style: { zIndex: 0, backgroundColor: "#181818" },
            },
            r.a.createElement(
              gt.a,
              {
                value: n,
                onChange: function (e, t) {
                  o(t);
                },
                "aria-label": "simple tabs example",
                centered: !0,
              },
              r.a.createElement(ht.a, Object.assign({ label: "ICS" }, xt(0))),
              r.a.createElement(ht.a, Object.assign({ label: "GUI" }, xt(1))),
              r.a.createElement(ht.a, Object.assign({ label: "LAC" }, xt(2)))
            )
          ),
          r.a.createElement(
            Ct,
            { value: n, index: 0, className: e.panel },
            r.a.createElement(vt, {
              topic: "Introduction to Computer Science",
              intro:
                "This course introduces computer concepts including fundamental functions and operations of the computer.\r Topics include basic introduction to Operating systems, Data structures, Database and computer networks\r and internet. Upon completion, students should be able to demonstrate an understanding of the role and\r function of computers and use the computer to solve problems.",
              course: [
                [
                  "Basics Of Computer And Data Processing",
                  "An Overview of the Computer System, Levels of Computer language, Program language translator, Software: Types of Software,Computer virus, How to deal with virus. How Computers Represent Data. Number System",
                ],
                [
                  "The Operating System And Data Structures",
                  "Operating Systems and Basics: Overview of Operating System, The user interface, Operating system services, Operating system Functions,Types of operating system,Introduction to Data Structure.",
                ],
                [
                  "Introduction To Database",
                  " Data, information, Database, Types of database, Database Management System, Introduction to Relational Database management system",
                ],
              ],
              img: [
                ["notes1.png", "operating_system.pdf", "Os notes"],
                ["notes2.png", "data_structure.pdf", "Ds notes"],
              ],
            })
          ),
          r.a.createElement(
            Ct,
            { value: n, index: 1, className: e.panel },
            r.a.createElement(vt, {
              topic: "Graphical User Interface",
              intro:
                " This course is an introduction to web design and development of website in the information fields. It is designed to provide understanding of basic web development\r concepts and process, web design best practices, web page creation",
              course: [
                [
                  "Introduction to Web",
                  "Introduction and Web Development Strategies, History of Web and Internet, Protocols governing Web, Connecting to Internet,Introduction to basic Internet services and tools",
                ],
                [
                  "Domain registration and web hosting",
                  " Domain Registration,Shared Hosting: Linux Hosting, Windows Hosting, Reseller Hosting,Specialized Hosting: WordPress Hosting, CMS Hosting, Ecommerce Hosting.",
                ],
                [
                  "Web page designing",
                  "HTML:HTML elements, Attributes, HTML list, table, images, frames, iframe ,forms, classes, ID, links.",
                ],
              ],
              img: [
                ["notes3.png", "html_basics.pdf", "Html basics"],
                ["notes2.png", "lists_tables.pdf", "Lists and tables"],
              ],
            })
          ),
          r.a.createElement(
            Ct,
            { value: n, index: 2, className: e.panel },
            r.a.createElement(vt, {
              topic: "Linear Algebra and Calculus",
              intro:
                "This is the engineering mathematics basic course. It deals with fundamental\r concepts of maths like calculus. Partial derivatives and matrices are covered in this course.",
              course: [
                [
                  "Partial Derivatives",
                  "Chain rule, Scalar point function,Vector point function, direction derivative,gradient vector,tangent plane, normal line,total differential,maxima and minima.",
                ],
                [
                  "Vector Calculus",
                  "Derivative of vector function,velocity of a particle,divergence,physical significance of divergence,gradient,physical significance of gradient,irrotational vectors,solenoidal vectors",
                ],
                [
                  "Matrices",
                  " introduction,matrix multiplication,gauss divergence theorem,gauss elemination method, rank-nullity theorem,eigen values,eigen vectos",
                ],
              ],
              img: [["notes4.png", "vector_calculus.pdf", "Vector calculus"]],
            })
          )
        );
      }
      var kt = function (e) {
          return r.a.createElement(
            "div",
            { style: { backgroundColor: "#2d2d2d", color: "white" } },
            r.a.createElement(Re, { name: "Resources" }),
            r.a.createElement(
              "div",
              { id: "about" },
              r.a.createElement(ce, {
                desc:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at sodales\r odio, vitae consequat magna. Donec hendrerit purus non leo laoreet, imperdiet \r porta ligula placerat. Vivamus molestie nisl diam, vel vestibulum arcu pharetra \r sollicitudin. Suspendisse scelerisque ante et imperdiet tempor. Quisque vitae\r risus non diam auctor lobortis id eu mauris.",
                btn: "Check out Workshops!",
                onRouteChange: e.onRouteChange,
              }),
              r.a.createElement("br", null),
              r.a.createElement("br", null)
            ),
            r.a.createElement(
              "div",
              { id: "resources" },
              r.a.createElement(
                N.a,
                { variant: "h6", align: "center" },
                "Check out notes of various subjects along with previous papers to help you study better!!"
              ),
              r.a.createElement("br", null),
              r.a.createElement(wt, null),
              r.a.createElement("br", null),
              r.a.createElement("br", null),
              r.a.createElement("br", null),
              r.a.createElement("br", null)
            )
          );
        },
        jt = a(123),
        Nt = a.n(jt),
        St =
          (a(198),
          function (e) {
            var t = e.text;
            return r.a.createElement("div", null, t);
          }),
        Ot = (function (e) {
          Object(s.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(i.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    { className: "map" },
                    r.a.createElement(
                      Nt.a,
                      {
                        bootstrapURLKeys: { key: "abcdef" },
                        defaultCenter: this.props.center,
                        defaultZoom: this.props.zoom,
                      },
                      r.a.createElement(St, {
                        lat: 59.955413,
                        lng: 30.337844,
                        text: "My Marker",
                      })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      Ot.defaultProps = { center: { lat: 59.95, lng: 30.33 }, zoom: 11 };
      var Rt = Ot,
        Dt = a(124),
        Tt = a.n(Dt),
        _t = a(125),
        It = a.n(_t),
        Pt = a(126),
        Lt = a.n(Pt),
        At = Object(S.a)(function (e) {
          return {
            root: Object(d.a)(
              {
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                zIndex: -3,
                "& > *": {
                  margin: e.spacing(1),
                  width: e.spacing(16),
                  height: e.spacing(16),
                },
                marginLeft: 190,
              },
              e.breakpoints.down("xs"),
              { flexDirection: "column", marginLeft: 0 }
            ),
            content: Object(d.a)(
              {
                backgroundColor: "#4e4e4e",
                boxShadow: "3px 3px 8px #000",
                color: "white",
                height: "57vh",
                width: "50vw",
                marginLeft: "-130px",
                paddingLeft: "130px",
                display: "flex",
                alignItems: "center",
              },
              e.breakpoints.down("sm"),
              {
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 0,
                marginTop: "-30px",
                paddingTop: "45px",
                width: "85vw",
              }
            ),
            map: Object(d.a)({}, e.breakpoints.down("sm"), { width: "100%" }),
            white: { color: "white" },
            grey: { color: "#bfbfbf" },
          };
        });
      var zt = function () {
          var e = At();
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(Re, { name: "Contact Us" }),
            r.a.createElement(
              "div",
              {
                id: "contact",
                style: { backgroundColor: "#2d2d2d", border: 0 },
              },
              r.a.createElement(
                "div",
                { className: e.root },
                r.a.createElement(Rt, { className: e.map }),
                r.a.createElement(
                  le.a,
                  { elevation: 2, className: e.content },
                  r.a.createElement(
                    v.a,
                    { component: "nav", "aria-label": "main mailbox folders" },
                    r.a.createElement(
                      C.a,
                      null,
                      r.a.createElement(
                        x.a,
                        null,
                        r.a.createElement(Tt.a, { className: e.grey })
                      ),
                      r.a.createElement(y.a, {
                        primary: "Address",
                        secondary: r.a.createElement(
                          N.a,
                          { variant: "body", className: e.white },
                          "Vasna-Bhaili road, Vadodara,Gujarat"
                        ),
                      })
                    ),
                    r.a.createElement(
                      C.a,
                      null,
                      r.a.createElement(
                        x.a,
                        null,
                        r.a.createElement(It.a, { className: e.grey })
                      ),
                      r.a.createElement(y.a, {
                        primary: "Phone no.",
                        secondary: r.a.createElement(
                          N.a,
                          { variant: "body2", className: e.white },
                          "0265-2222222"
                        ),
                      })
                    ),
                    r.a.createElement(
                      C.a,
                      null,
                      r.a.createElement(
                        x.a,
                        null,
                        r.a.createElement(Lt.a, { className: e.grey })
                      ),
                      r.a.createElement(y.a, {
                        primary: "Email",
                        secondary: r.a.createElement(
                          N.a,
                          { variant: "body2", className: e.white },
                          "uni@nuv.ac.in"
                        ),
                      })
                    ),
                    r.a.createElement(
                      C.a,
                      null,
                      r.a.createElement(
                        x.a,
                        null,
                        r.a.createElement(B.a, { className: e.grey })
                      ),
                      r.a.createElement(
                        "div",
                        { style: { display: "flex", flexDirection: "column" } },
                        r.a.createElement(y.a, { primary: "Socials" }),
                        r.a.createElement(
                          "div",
                          null,
                          r.a.createElement(Ee.a, null),
                          "\u2002",
                          r.a.createElement(Ce.a, null),
                          "\u2002",
                          r.a.createElement(ye.a, null),
                          "\u2002",
                          r.a.createElement(ke.a, null)
                        )
                      )
                    )
                  )
                )
              ),
              r.a.createElement("br", null),
              r.a.createElement("br", null),
              r.a.createElement("br", null)
            )
          );
        },
        Bt = (function (e) {
          Object(s.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            return (
              Object(i.a)(this, a),
              ((e = t.call(this)).loadUser = function (t) {
                e.setState({
                  user: {
                    id: t._id,
                    username: t.username,
                    name: t.name,
                    email: t.email,
                    phone: t.phone,
                    department: t.department,
                  },
                });
              }),
              (e.loggedIn = function (t) {
                e.setState({ loginStatus: t }),
                  e.state.loginStatus ||
                    e.setState({
                      user: {
                        id: "",
                        username: "",
                        name: "",
                        email: "",
                        phone: "",
                        department: "",
                      },
                    });
              }),
              (e.onRouteChange = function (t) {
                e.setState({ route: t });
              }),
              (e.state = {
                route: "home",
                loginStatus: !1,
                user: {
                  id: "",
                  name: "",
                  email: "",
                  username: "",
                  phone: "",
                  department: "",
                },
              }),
              e
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "renderSwitch",
                value: function (e) {
                  switch (e) {
                    case "home":
                      return r.a.createElement(
                        Se.a,
                        { exact: !0, link: "/home" },
                        r.a.createElement(pe, {
                          onRouteChange: this.onRouteChange,
                        })
                      );
                    case "login":
                      return r.a.createElement(
                        Se.a,
                        { link: "/login" },
                        r.a.createElement(Te, {
                          onRouteChange: this.onRouteChange,
                          loadUser: this.loadUser,
                          loggedIn: this.loggedIn,
                          loginStatus: this.state.loginStatus,
                        })
                      );
                    case "signup":
                      return r.a.createElement(
                        Se.a,
                        { link: "/signup" },
                        r.a.createElement(Qe, {
                          onRouteChange: this.onRouteChange,
                          loadUser: this.loadUser,
                          loggedIn: this.loggedIn,
                        })
                      );
                    case "user":
                      return r.a.createElement(
                        Se.a,
                        { link: "/user" },
                        r.a.createElement(Ge, { user: this.state.user })
                      );
                    case "events":
                      return r.a.createElement(
                        Se.a,
                        { link: "/events" },
                        r.a.createElement(it, null)
                      );
                    case "clubs":
                      return r.a.createElement(
                        Se.a,
                        { link: "/clubs" },
                        r.a.createElement(pt, {
                          onRouteChange: this.onRouteChange,
                        })
                      );
                    case "resources":
                      return r.a.createElement(
                        Se.a,
                        { link: "/resources" },
                        r.a.createElement(kt, {
                          onRouteChange: this.onRouteChange,
                        })
                      );
                    case "contact":
                      return r.a.createElement(
                        Se.a,
                        { link: "/contact" },
                        r.a.createElement(zt, null)
                      );
                    default:
                      return "404 page not found";
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(q, {
                      onRouteChange: this.onRouteChange,
                      loginStatus: this.state.loginStatus,
                      loggedIn: this.loggedIn,
                    }),
                    this.renderSwitch(this.state.route),
                    r.a.createElement(Ne, {
                      route: this.state.route,
                      loginStatus: this.state.loginStatus,
                    })
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      l.a.render(
        r.a.createElement(R.a, null, r.a.createElement(Bt, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    35: function (e, t, a) {},
    53: function (e, t, a) {
      var n = {
        "./Logo.png": 64,
        "./background.png": 161,
        "./banner1.jpg": 83,
        "./carousel-one.jpg": 95,
        "./carousel-three.jpg": 96,
        "./carousel-two.jpg": 97,
        "./dsc.png": 162,
        "./main1.jpg": 65,
        "./main2.jpg": 66,
        "./main3.jpg": 67,
        "./microsoft.png": 163,
        "./mozilla.png": 164,
        "./notes1.png": 165,
        "./notes2.png": 166,
        "./notes3.png": 167,
        "./notes4.png": 168,
        "./pattern.jpg": 98,
        "./user1.jpg": 84,
      };
      function r(e) {
        var t = o(e);
        return a(t);
      }
      function o(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (r.keys = function () {
        return Object.keys(n);
      }),
        (r.resolve = o),
        (e.exports = r),
        (r.id = 53);
    },
    64: function (e, t, a) {
      e.exports = a.p + "static/media/Logo.ed6bf91b.png";
    },
    65: function (e, t, a) {
      e.exports = a.p + "static/media/main1.88df7202.jpg";
    },
    66: function (e, t, a) {
      e.exports = a.p + "static/media/main2.2da05c90.jpg";
    },
    67: function (e, t, a) {
      e.exports = a.p + "static/media/main3.ce79fbf7.jpg";
    },
    83: function (e, t, a) {
      e.exports = a.p + "static/media/banner1.29b86c24.jpg";
    },
    84: function (e, t, a) {
      e.exports = a.p + "static/media/user1.3ea05762.jpg";
    },
    95: function (e, t, a) {
      e.exports = a.p + "static/media/carousel-one.5d01ae34.jpg";
    },
    96: function (e, t, a) {
      e.exports = a.p + "static/media/carousel-three.434e2bd6.jpg";
    },
    97: function (e, t, a) {
      e.exports = a.p + "static/media/carousel-two.e586ae79.jpg";
    },
    98: function (e, t, a) {
      e.exports = a.p + "static/media/pattern.bb28f340.jpg";
    },
  },
  [[147, 1, 2]],
]);
//# sourceMappingURL=main.2c34a49b.chunk.js.map
