using src.interfaces;

namespace src.models;

public class AImplementation : IAInterface
{
  private IBInterface? _abstractB;

  public IBInterface GetB() => _abstractB ?? throw new InvalidOperationException("B is not set");
  public void SetB(IBInterface abstractB) => _abstractB = abstractB;
  public string AJob() => _abstractB != null ? $"I am the implementation of A and I depend on B: '{_abstractB.BJob()}'" : "B is not set";
}
