import { jsx as e, jsxs as t, Fragment as V } from "react/jsx-runtime";
import { useState as j } from "react";
function D({ name: n, size: l = 300, outlined: s = !1 }) {
  const a = [
    "icon",
    `icon-${l}`,
    s ? "icon-outlined" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("span", { className: a, "aria-hidden": "true", children: n });
}
const E = {
  large: "btn-700",
  small: "btn-300",
  xsmall: "btn-100"
}, C = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
  transactional: "btn-transactional",
  neutral: "btn-neutral",
  destructive: "btn-destructive",
  white: "btn-white",
  "white-tertiary": "btn-white-tertiary",
  black: "btn-black"
}, L = {
  large: "btn-circle-700",
  small: "btn-circle-300"
};
function A({
  variant: n,
  size: l = "large",
  icon: s,
  iconPosition: a = "leading",
  fill: r = !1,
  disabled: i = !1,
  onClick: c,
  children: o,
  type: d = "button"
}) {
  const u = !!s, m = u && !o, f = [
    "btn",
    C[n],
    E[l],
    u && a === "leading" && !m ? "btn-icon-leading" : "",
    u && a === "trailing" && !m ? "btn-icon-trailing" : "",
    m ? "btn-icon-only" : "",
    r ? "btn-fill" : ""
  ].filter(Boolean).join(" "), h = s ? /* @__PURE__ */ e("span", { className: "btn-icon material-symbols-rounded", "aria-hidden": "true", children: s }) : null;
  return /* @__PURE__ */ t(
    "button",
    {
      type: d,
      className: f,
      disabled: i,
      onClick: c,
      children: [
        a === "leading" && h,
        o && /* @__PURE__ */ e("span", { children: o }),
        a === "trailing" && h
      ]
    }
  );
}
function F({
  variant: n,
  size: l = "large",
  icon: s,
  disabled: a = !1,
  onClick: r,
  type: i = "button",
  ...c
}) {
  const o = [
    "btn",
    "btn-circle",
    C[n],
    L[l]
  ].join(" ");
  return /* @__PURE__ */ e(
    "button",
    {
      type: i,
      className: o,
      disabled: a,
      onClick: r,
      ...c,
      children: /* @__PURE__ */ e("span", { className: "btn-icon material-symbols-rounded", "aria-hidden": "true", children: s })
    }
  );
}
function k({ children: n, teamColor: l = !1, icon: s, iconPosition: a = "leading" }) {
  const r = [
    "tag",
    l ? "tag-team-color" : "",
    s && a === "leading" ? "tag-icon-leading" : "",
    s && a === "trailing" ? "tag-icon-trailing" : ""
  ].filter(Boolean).join(" "), i = s ? /* @__PURE__ */ e("span", { className: "material-symbols-rounded", "aria-hidden": "true", children: s }) : null;
  return /* @__PURE__ */ t("span", { className: r, children: [
    a === "leading" && i,
    n,
    a === "trailing" && i
  ] });
}
function z({
  children: n,
  surface: l = "bordered",
  teamColor: s = !1,
  icon: a,
  iconPosition: r = "leading",
  disabled: i = !1,
  onClick: c
}) {
  const d = [
    "chip",
    l === "bordered" ? "surface-borderNeutral" : "surface-ghost",
    "scale-300",
    s ? "chip-team-color" : "",
    a && r === "leading" ? "chip-icon-leading" : "",
    a && r === "trailing" ? "chip-icon-trailing" : "",
    i ? "is-disabled" : ""
  ].filter(Boolean).join(" "), u = a ? /* @__PURE__ */ e("span", { className: "material-symbols-rounded", "aria-hidden": "true", children: a }) : null;
  return /* @__PURE__ */ t("button", { type: "button", className: d, onClick: c, disabled: i, children: [
    r === "leading" && u,
    n,
    r === "trailing" && u
  ] });
}
function K({ header: n, body: l, footer: s, interactive: a = !1, onClick: r }) {
  return /* @__PURE__ */ t("div", { className: a ? "card-closed-interactive" : "card-closed", onClick: r, role: a ? "button" : void 0, tabIndex: a ? 0 : void 0, children: [
    n && /* @__PURE__ */ e("div", { className: "card-closed-header", children: n }),
    l && /* @__PURE__ */ e("div", { className: "card-closed-body", children: l }),
    s && /* @__PURE__ */ e("div", { className: "card-closed-footer", children: s })
  ] });
}
function q({ header: n, sections: l }) {
  return /* @__PURE__ */ t("div", { className: "card-open", children: [
    n && /* @__PURE__ */ e("div", { className: "card-open-header", children: n }),
    /* @__PURE__ */ e("div", { className: "card-open-content", children: l.map((s, a) => /* @__PURE__ */ e("div", { className: "card-open-section", children: s }, a)) })
  ] });
}
function H({ children: n, interactive: l = !1, onClick: s }) {
  return /* @__PURE__ */ e("div", { className: l ? "card-open-section-interactive" : "card-open-section", onClick: s, role: l ? "button" : void 0, tabIndex: l ? 0 : void 0, children: n });
}
function G({
  leading: n,
  leadingGap: l = "md",
  children: s,
  trailing: a,
  trailingGap: r = "xs",
  notTappable: i = !1,
  disabled: c = !1,
  onClick: o
}) {
  const d = [
    "list-row",
    i ? "not-tappable" : "",
    c ? "disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("div", { className: d, onClick: o, children: [
    n && /* @__PURE__ */ e("div", { className: `leading leading-gap-${l}`, children: n }),
    /* @__PURE__ */ e("div", { className: "list-row-content", children: s }),
    a && /* @__PURE__ */ e("div", { className: `trailing trailing-gap-${r}`, children: a })
  ] });
}
function J({ label: n, sublabel: l }) {
  return /* @__PURE__ */ t("div", { className: "list-row-text-pair", children: [
    /* @__PURE__ */ e("span", { className: "labelBold30", children: n }),
    l && /* @__PURE__ */ e("span", { className: "labelRegular10 text-secondary", children: l })
  ] });
}
function M({ label: n, sublabel: l }) {
  return /* @__PURE__ */ t("div", { className: "trailing-text-pair", children: [
    /* @__PURE__ */ e("span", { className: "labelBold20", children: n }),
    l && /* @__PURE__ */ e("span", { className: "labelRegular10 text-secondary", children: l })
  ] });
}
function Q({ src: n, alt: l, size: s = "square" }) {
  return /* @__PURE__ */ e(
    "img",
    {
      className: `leading-image-${s}`,
      src: n,
      alt: l
    }
  );
}
function U({ ariaLabel: n = "Team logo" }) {
  return /* @__PURE__ */ e("div", { className: "leading-logo", role: "img", "aria-label": n });
}
function W({ children: n }) {
  return /* @__PURE__ */ e("div", { className: "circle-container", children: n });
}
function X({
  label: n,
  linkText: l,
  linkHref: s,
  type: a = "text",
  value: r,
  defaultValue: i,
  placeholder: c,
  message: o,
  icon: d,
  clearable: u = !1,
  error: m = !1,
  disabled: f = !1,
  onChange: h,
  onClear: b,
  name: v,
  id: g,
  autoComplete: w
}) {
  const [y, p] = j(i ?? ""), N = r !== void 0 ? r : y, B = !!N, I = [
    "input-field",
    m ? "is-error" : "",
    f ? "is-disabled" : "",
    u && B ? "has-value" : ""
  ].filter(Boolean).join(" ");
  function $(T) {
    const x = T.target.value;
    r === void 0 && p(x), h == null || h(x);
  }
  function S() {
    r === void 0 && p(""), b == null || b();
  }
  return /* @__PURE__ */ t("div", { className: I, children: [
    (n || l) && /* @__PURE__ */ t("div", { className: "input-label-row", children: [
      n && /* @__PURE__ */ e("label", { className: "input-label", htmlFor: g, children: n }),
      l && /* @__PURE__ */ e("a", { className: "input-link", href: s ?? "#", children: l })
    ] }),
    /* @__PURE__ */ t("div", { className: "input-and-message", children: [
      /* @__PURE__ */ t("div", { className: "input-control", children: [
        d && /* @__PURE__ */ e("span", { className: "input-icon material-symbols-rounded", "aria-hidden": "true", children: d }),
        /* @__PURE__ */ e(
          "input",
          {
            type: a,
            name: v,
            id: g,
            value: N,
            placeholder: c,
            disabled: f,
            autoComplete: w,
            onChange: $
          }
        ),
        u && B && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "input-clear",
            onClick: S,
            "aria-label": "Clear field",
            children: /* @__PURE__ */ e("span", { className: "material-symbols-rounded", "aria-hidden": "true", children: "close" })
          }
        )
      ] }),
      o && /* @__PURE__ */ e("span", { className: "input-message", children: o })
    ] })
  ] });
}
function Y({
  label: n,
  options: l,
  value: s,
  placeholder: a,
  message: r,
  icon: i,
  error: c = !1,
  disabled: o = !1,
  onChange: d,
  name: u,
  id: m
}) {
  var y;
  const [f, h] = j(""), b = s !== void 0 ? s : f, v = ((y = l.find((p) => p.value === b)) == null ? void 0 : y.label) ?? a ?? "", g = [
    "input-field",
    "input-select",
    c ? "is-error" : "",
    o ? "is-disabled" : ""
  ].filter(Boolean).join(" ");
  function w(p) {
    const N = p.target.value;
    s === void 0 && h(N), d == null || d(N);
  }
  return /* @__PURE__ */ t("div", { className: g, children: [
    n && /* @__PURE__ */ e("div", { className: "input-label-row", children: /* @__PURE__ */ e("label", { className: "input-label", htmlFor: m, children: n }) }),
    /* @__PURE__ */ t("div", { className: "input-and-message", children: [
      /* @__PURE__ */ t("div", { className: "input-control", children: [
        i && /* @__PURE__ */ e("span", { className: "input-icon material-symbols-rounded", "aria-hidden": "true", children: i }),
        /* @__PURE__ */ e("span", { className: "input-select-display", children: v }),
        /* @__PURE__ */ e("span", { className: "input-select-chevron material-symbols-rounded", "aria-hidden": "true", children: "arrow_drop_down" }),
        /* @__PURE__ */ t(
          "select",
          {
            name: u,
            id: m,
            value: b,
            disabled: o,
            onChange: w,
            "aria-label": n,
            children: [
              a && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: a }),
              l.map((p) => /* @__PURE__ */ e("option", { value: p.value, children: p.label }, p.value))
            ]
          }
        )
      ] }),
      r && /* @__PURE__ */ e("span", { className: "input-message", children: r })
    ] })
  ] });
}
function Z({
  children: n,
  surface: l = "wash",
  selected: s = !1,
  disabled: a = !1,
  onClick: r
}) {
  const c = [
    "selector",
    l === "wash" ? "surface-washNeutral" : "surface-card",
    "scale-700",
    s ? "is-selected" : "",
    a ? "is-disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      className: c,
      onClick: a ? void 0 : r,
      role: "button",
      tabIndex: a ? void 0 : 0,
      "aria-selected": s,
      onKeyDown: (o) => {
        !a && (o.key === "Enter" || o.key === " ") && (o.preventDefault(), r == null || r());
      },
      children: n
    }
  );
}
function P({ visual: n, info: l, tag: s, tappable: a = !1, onClick: r }) {
  const i = [
    "tile",
    a ? "surface-card scale-700" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t(
    "div",
    {
      className: i,
      onClick: a ? r : void 0,
      role: a ? "button" : void 0,
      tabIndex: a ? 0 : void 0,
      onKeyDown: a ? (c) => {
        (c.key === "Enter" || c.key === " ") && (c.preventDefault(), r == null || r());
      } : void 0,
      children: [
        n,
        s && /* @__PURE__ */ e("div", { className: "tile-tag", children: s }),
        /* @__PURE__ */ e("div", { className: "tile-info", children: l })
      ]
    }
  );
}
function ee({
  logoSrc: n,
  teamName: l,
  shortName: s,
  fullName: a,
  href: r = "/",
  actions: i
}) {
  return /* @__PURE__ */ e("header", { className: "top-bar", role: "banner", children: /* @__PURE__ */ t("div", { className: "top-bar-inner", children: [
    /* @__PURE__ */ t("a", { className: "top-bar-brand", href: r, children: [
      n && /* @__PURE__ */ e(
        "img",
        {
          className: "top-bar-logo",
          src: n,
          alt: l ?? ""
        }
      ),
      (s || a) && /* @__PURE__ */ t("span", { className: "top-bar-name display100", children: [
        s && /* @__PURE__ */ e("span", { className: "top-bar-name-short", children: s }),
        a && /* @__PURE__ */ e("span", { className: "top-bar-name-full", children: a })
      ] })
    ] }),
    i && /* @__PURE__ */ e("div", { className: "top-bar-actions", children: i })
  ] }) });
}
function ae({ tabs: n, activeTab: l, onChange: s, neutral: a = !1, ariaLabel: r }) {
  const i = ["tabs", a ? "tabs-neutral" : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("nav", { className: i, role: "tablist", "aria-label": r, children: n.map((c) => {
    const o = c.value === l;
    return /* @__PURE__ */ e(
      "button",
      {
        className: ["tab", o ? "is-active" : ""].filter(Boolean).join(" "),
        role: "tab",
        "aria-selected": o,
        onClick: () => s(c.value),
        type: "button",
        children: c.label
      },
      c.value
    );
  }) });
}
function O({ item: n, index: l }) {
  return /* @__PURE__ */ t("div", { className: `step step-${n.state}`, children: [
    /* @__PURE__ */ e("div", { className: "step-circle", children: n.state === "completed" ? /* @__PURE__ */ e("span", { className: "icon icon-100", "aria-hidden": "true", children: "check" }) : /* @__PURE__ */ e("span", { className: "step-number", children: l + 1 }) }),
    /* @__PURE__ */ e("span", { className: "step-label", children: n.label })
  ] });
}
function ne({ steps: n, brand: l = !1 }) {
  const s = ["steps", l ? "steps-brand" : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: s, children: n.map((a, r) => /* @__PURE__ */ t(V, { children: [
    /* @__PURE__ */ e(O, { item: a, index: r }, a.label),
    r < n.length - 1 && /* @__PURE__ */ e("span", { className: "step-connector icon", "aria-hidden": "true", children: "chevron_right" }, `connector-${r}`)
  ] })) });
}
function le({ title: n, subtitle: l, tabs: s, steps: a }) {
  const c = [
    "page-header",
    !!s ? "has-tabs" : "",
    !!a ? "has-steps" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("section", { className: c, children: [
    a,
    /* @__PURE__ */ e("div", { className: "page-header-content", children: /* @__PURE__ */ t("div", { className: "card-text-pair", children: [
      /* @__PURE__ */ e("span", { className: "display500", children: n }),
      l && /* @__PURE__ */ e("span", { className: "labelRegular40 text-secondary", children: l })
    ] }) }),
    s
  ] });
}
function se({
  opponentLogo: n,
  opponentName: l,
  date: s,
  state: a,
  featuredPrice: r,
  offerCount: i,
  onTopClick: c,
  onBottomClick: o
}) {
  const d = a === "featured-only" || a === "featured-and-others", u = a === "featured-and-others" || a === "no-featured-offers", m = ["event-row-top", d ? "surface-section" : ""].filter(Boolean).join(" "), f = ["event-row-bottom", u ? "surface-section" : ""].filter(Boolean).join(" "), h = () => a === "featured-only" || a === "featured-and-others" ? /* @__PURE__ */ e("div", { className: "trailing trailing-gap-lg", children: /* @__PURE__ */ e("button", { type: "button", className: "btn btn-primary btn-100", onClick: c, children: r }) }) : a === "sold-out" ? /* @__PURE__ */ e("div", { className: "trailing trailing-gap-sm", children: /* @__PURE__ */ e("span", { className: "labelBold30 text-secondary", children: "Sold Out" }) }) : a === "coming-soon" ? /* @__PURE__ */ e("div", { className: "trailing trailing-gap-sm", children: /* @__PURE__ */ e("span", { className: "labelBold20 text-interactive-tertiary event-row-coming-soon", children: "Coming Soon" }) }) : null, b = a === "featured-and-others" || a === "no-featured-offers", v = a === "featured-and-others" ? `${i ?? 0} Additional Offer${(i ?? 0) !== 1 ? "s" : ""}` : `${i ?? 0} Offer${(i ?? 0) !== 1 ? "s" : ""} Available`;
  return /* @__PURE__ */ t("div", { className: "event-row", children: [
    /* @__PURE__ */ e("div", { className: m, children: /* @__PURE__ */ t("div", { className: `list-row${d ? "" : " not-tappable"}`, onClick: d ? c : void 0, children: [
      /* @__PURE__ */ e("div", { className: "leading leading-gap-sm", children: /* @__PURE__ */ e("img", { className: "event-row-logo", src: n, alt: l }) }),
      /* @__PURE__ */ e("div", { className: "list-row-content", children: /* @__PURE__ */ t("div", { className: "list-row-text-pair", children: [
        /* @__PURE__ */ e("span", { className: "event-row-label", children: l }),
        /* @__PURE__ */ e("span", { className: "event-row-sublabel text-secondary", children: s })
      ] }) }),
      h()
    ] }) }),
    b && /* @__PURE__ */ e("div", { className: f, onClick: u ? o : void 0, children: /* @__PURE__ */ t("div", { className: "list-row", children: [
      /* @__PURE__ */ e("div", { className: "list-row-content", children: /* @__PURE__ */ e("div", { className: "list-row-text-pair", children: /* @__PURE__ */ e("span", { className: "labelBold30 text-interactive-tertiary", children: v }) }) }),
      /* @__PURE__ */ e("div", { className: "trailing trailing-gap-xs", children: /* @__PURE__ */ e("span", { className: "icon icon-200", "aria-hidden": "true", children: "arrow_drop_down" }) })
    ] }) })
  ] });
}
export {
  A as Button,
  K as CardClosed,
  q as CardOpen,
  H as CardSection,
  z as Chip,
  F as CircleButton,
  W as CircleContainer,
  se as EventRow,
  D as Icon,
  X as Input,
  Q as LeadingImage,
  U as LeadingLogo,
  G as ListRow,
  le as PageHeader,
  Y as Select,
  Z as Selector,
  ne as Steps,
  ae as Tabs,
  k as Tag,
  J as TextPair,
  P as Tile,
  ee as TopBar,
  M as TrailingText
};
