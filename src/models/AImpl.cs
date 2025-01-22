using src.interfaces;

namespace src.models;

public class AImpl : IA
{
  private IB? _abstractB;

  public IB GetB() => _abstractB ?? throw new NullReferenceException("B is not set");

  public void SetB(IB _abstractB) => this._abstractB = _abstractB;
  public string AJob() => _abstractB != null ? $"I am A and I depend on B: '{_abstractB.BJob()}'" : "B is not set";
}
