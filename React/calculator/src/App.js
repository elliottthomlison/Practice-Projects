import './App.css';

function App() {
  return (
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <table class="table">
                    <tr>
                        <td colspan="3"><input type="text" id="textarea"/></td>
                        <td><input type="button" value="c" onclick="clr()"/></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="1" onclick="display('1')"/></td>
                        <td><input type="button" value="2" onclick="display('2')"/></td>
                        <td><input type="button" value="3" onclick="display('3')"/></td>
                        <td><input type="button" value="/" onclick="display('/')"/></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="4" onclick="display('4')"/></td>
                        <td><input type="button" value="5" onclick="display('5')"/></td>
                        <td><input type="button" value="6" onclick="display('6')"/></td>
                        <td><input type="button" value="-" onclick="display('-')"/></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="7" onclick="display('7')"/></td>
                        <td><input type="button" value="8" onclick="display('8')"/></td>
                        <td><input type="button" value="9" onclick="display('9')"/></td>
                        <td><input type="button" value="+" onclick="display('+')"/></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="." onclick="display('.')"/></td>
                        <td><input type="button" value="0" onclick="display('0')"/></td>
                        <td><input type="button" value="=" onclick="calculate()"/></td>
                        <td><input type="button" value="*" onclick="display('*')"/></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  );
}

export default App;
