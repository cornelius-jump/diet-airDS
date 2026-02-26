import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as R}from"./index-BioFo8Zg.js";import{L as u,T as p,a as m}from"./ListRow-B0zcfdXQ.js";import"./index-yBjzXJbu.js";function a({children:c,surface:n="wash",selected:t=!1,disabled:s=!1,onClick:l}){const j=["selector",n==="wash"?"surface-washNeutral":"surface-card","scale-700",t?"is-selected":"",s?"is-disabled":""].filter(Boolean).join(" ");return e.jsx("div",{className:j,onClick:s?void 0:l,role:"button",tabIndex:s?void 0:0,"aria-selected":t,onKeyDown:d=>{!s&&(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),l==null||l())},children:c})}a.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content (typically a ListRow)"},surface:{required:!1,tsType:{name:"union",raw:"'wash' | 'card'",elements:[{name:"literal",value:"'wash'"},{name:"literal",value:"'card'"}]},description:"Surface style. 'wash' for inside cards; 'card' on page background",defaultValue:{value:"'wash'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Selected state",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onClick handler"}}};const W={title:"Components/Selector",component:a,parameters:{layout:"padded"}},r={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(a,{children:e.jsx(u,{trailing:e.jsx(m,{label:"$120",sublabel:"each"}),trailingGap:"sm",children:e.jsx(p,{label:"Section 115 · Row 4",sublabel:"2 tickets"})})})})},i={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(a,{selected:!0,children:e.jsx(u,{trailing:e.jsx(m,{label:"$120",sublabel:"each"}),trailingGap:"sm",children:e.jsx(p,{label:"Section 115 · Row 4",sublabel:"2 tickets"})})})})},o={render:()=>{const[c,n]=R.useState(!1);return e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(a,{selected:c,onClick:()=>n(t=>!t),children:e.jsx(u,{trailing:e.jsx(m,{label:"$120",sublabel:"each"}),trailingGap:"sm",children:e.jsx(p,{label:"Section 115 · Row 4",sublabel:"Click to select"})})})})}};var x,b,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <Selector>
        <ListRow trailing={<TrailingText label="$120" sublabel="each" />} trailingGap="sm">
          <TextPair label="Section 115 · Row 4" sublabel="2 tickets" />
        </ListRow>
      </Selector>
    </div>
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,S,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <Selector selected>
        <ListRow trailing={<TrailingText label="$120" sublabel="each" />} trailingGap="sm">
          <TextPair label="Section 115 · Row 4" sublabel="2 tickets" />
        </ListRow>
      </Selector>
    </div>
}`,...(g=(S=i.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var w,v,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState(false);
    return <div style={{
      maxWidth: '400px'
    }}>
        <Selector selected={selected} onClick={() => setSelected(s => !s)}>
          <ListRow trailing={<TrailingText label="$120" sublabel="each" />} trailingGap="sm">
            <TextPair label="Section 115 · Row 4" sublabel="Click to select" />
          </ListRow>
        </Selector>
      </div>;
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const $=["Default","Selected","Interactive"];export{r as Default,o as Interactive,i as Selected,$ as __namedExportsOrder,W as default};
