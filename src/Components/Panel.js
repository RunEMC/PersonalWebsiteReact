import React from 'react';

var panelStyle;

var innerStyle;

const topLeftWedgeStyle = {
  display: 'inline-block',
  position: 'relative',
  width: '227.5px',
  height: '227.5px',
  borderLeft: '2px solid',
  borderTop: '2px solid',
  borderRadius: '100% 0 0 0',
  backgroundColor: '#e0f3ff',
}

const topRightWedgeStyle = {
  display: 'inline-block',
  position: 'relative',
  width: '227.5px',
  height: '227.5px',
  border: '0px solid',
  borderRight: '2px solid',
  borderTop: '2px solid',
  borderRadius: '0 100% 0 0',
  backgroundColor: '#ffebe0',
}

const botLeftWedgeStyle = {
  display: 'inline-block',
  position: 'relative',
  width: '227.5px',
  height: '227.5px',
  borderLeft: '2px solid',
  borderBottom: '2px solid',
  borderRadius: '0 0 0 100%',
  backgroundColor: '#fffae0',
}

const botRightWedgeStyle = {
  display: 'inline-block',
  position: 'relative',
  width: '227.5px',
  height: '227.5px',
  borderRight: '2px solid',
  borderBottom: '2px solid',
  borderRadius: '0 0 100% 0',
  backgroundColor: '#f6e0ff',
}

const topLeftInner = {
  position: 'relative',
  top: '45%',
  left: '6%',
}

const topRightInner = {
  position: 'relative',
  top: '45%',
  left: '-6%',
}

const botLeftInner = {
  position: 'relative',
  top: '25%',
  left: '6%',
}

const botRightInner = {
  position: 'relative',
  top: '25%',
  left: '-6%',
}

// For debugging, credit to PhiLho (https://stackoverflow.com/a/130504/9414289)
function DumpObjectIndented(obj, indent)
{
  var result = "";
  if (indent == null) indent = "";

  for (var property in obj)
  {
    var value = obj[property];
    if (typeof value == 'string')
      value = "'" + value + "'";
    else if (typeof value == 'object')
    {
      if (value instanceof Array)
      {
        // Just let JS convert the Array to a string!
        value = "[ " + value + " ]";
      }
      else
      {
        // Recursive dump
        // (replace "  " by "\t" or something else if you prefer)
        var od = DumpObjectIndented(value, indent + "  ");
        // If you like { on the same line as the key
        //value = "{\n" + od + "\n" + indent + "}";
        // If you prefer { and } to be aligned
        value = "\n" + indent + "{\n" + od + "\n" + indent + "}";
      }
    }
    result += indent + "'" + property + "' : " + value + ",\n";
  }
  return result.replace(/,\n$/, "");
}


class Panel extends React.Component {
  constructor(props) {
    super(props);
    /*
    this.state = {
      imgSrc: props.imgSrc,
    };
    */
    //console.log("Adding styles..." + this.props.position);
    //console.log("Original:\n" + DumpObjectIndented(panelStyle, " "));
    switch (this.props.position) {
      case 'topLeft':
        panelStyle = topLeftWedgeStyle;
        innerStyle = topLeftInner;
        break;
      case 'topRight':
        panelStyle = topRightWedgeStyle;
        innerStyle = topRightInner;
        break;
      case 'botLeft':
        panelStyle = botLeftWedgeStyle;
        innerStyle = botLeftInner;
        break;
      case 'botRight':
        panelStyle = botRightWedgeStyle;
        innerStyle = botRightInner;
        break;
      default:
    }
  }

  render() {
    //console.log("Rendering...\n" + DumpObjectIndented(panelStyle, " "));
    return (
      <div style={panelStyle}>
        <img style={innerStyle} src={this.props.imgSrc} alt={"test"}/>
        <h3 style={innerStyle}>{this.props.title}</h3>
      </div>
    )
  }
}

export default Panel;
