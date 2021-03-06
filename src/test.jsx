let flag = true


/** @jsx LReact.createElement */

const dom1 = <div>
  <h1>abc</h1>
</div>

const dom2 = <div>
  <h1>ABC</h1>
</div>

const container = document.getElementById("root")
function rerender () {
  const element = <div>
    <h1>Hi. I'm lijiaqi.</h1>
    <h2>My GitHub address is <a href="https://github.com/gaearon-byte">gaearon-byte</a></h2>
    <button onClick={handle}>change dom!</button>

    {flag}

    {flag ? dom1 : dom2}
    
    <div>hi, this is div element.</div>
    <p>hi, this is p element</p>
    <span>hi, this is span element.</span>
    <input type="text" />
    <select name="" id="">
      <option value="哈哈">哈哈</option>
    </select>
    <ul>
      <li>this is first li</li>
      <li>this is second li</li>
    </ul>
    <ul>
      <ol>this is first ol</ol>
      <ol>this is second ol</ol>
    </ul>
    <table>
      <tr>
        <td>0-0</td>
        <td>0-1</td>
      </tr>
      <tr>
        <td>1-0</td>
        <td>1-1</td>
      </tr>
    </table>
  </div>
  LReact.render(element, container)
}

rerender()

function handle () {
  flag = !flag
  rerender()
}
