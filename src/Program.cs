using src.interfaces;
using src.models;

IA aImplementation = new AImpl();
IB bImplementation = new BImpl();

aImplementation.SetB(bImplementation);
Console.WriteLine(aImplementation.AJob()); // I am A and I depend on B: 'I am B'