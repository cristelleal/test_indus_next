// app/calculator.tsx
'use client';
import { useState, useEffect } from 'react';
import './calculator.css';

export default function Calculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState<number | string>('');
  const [isCalculating, setIsCalculating] = useState(false);

  const [history, setHistory] = useState<
    { a: number; b: number; operator: string; result: number | string }[]
  >([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = () => {
    fetch('/api/history')
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch(error => console.error('Erreur lors du chargement de l\'historique:', error));
  };

  async function calculate() {
    setIsCalculating(true);
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setResult('Veuillez entrer des nombres valides');
      setIsCalculating(false);
      return;
    }

    let operationResult: number | string;

    switch (operator) {
      case '+':
        operationResult = numA + numB;
        break;
      case '-':
        operationResult = numA - numB;
        break;
      case '*':
        operationResult = numA * numB;
        break;
      case '/':
        if (numB === 0) {
          operationResult = 'Division par zéro';
        } else {
          operationResult = numA / numB;
        }
        break;
      default:
        operationResult = 'Opérateur non supporté';
    }

    setResult(operationResult);

    try {
      await fetch('/api/history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          a: numA,
          b: numB,
          operator,
          result: operationResult,
        }),
      });
      fetchHistory();
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement du calcul:', error);
    } finally {
      setIsCalculating(false);
    }
  }

  const formatResult = (value: number | string) => {
    if (typeof value === 'number') {
      return Number.isInteger(value) ? value.toString() : value.toFixed(2);
    }
    return value;
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Calculatrice</h2>
      
      <div className="calculator-form">
        <div className="calculator-inputs">
          <input
            type="text"
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="Nombre A"
            className="calculator-input"
          />
          
          <select 
            value={operator} 
            onChange={(e) => setOperator(e.target.value)}
            className="calculator-select"
          >
            <option value="+">+</option>
            <option value="-">−</option>
            <option value="*">×</option>
            <option value="/">÷</option>
          </select>
          
          <input
            type="text"
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="Nombre B"
            className="calculator-input"
          />
        </div>
        
        <button 
          onClick={calculate} 
          disabled={isCalculating}
          className="calculator-button"
        >
          {isCalculating ? 'Calcul en cours...' : 'Calculer'}
        </button>
        
        <div className="result-container">
          <div className="result-text">
            Résultat : <span className="result-value">{formatResult(result)}</span>
          </div>
        </div>
      </div>
      
      <div className="history-section">
        <h3 className="history-title">Historique</h3>
        {history.length === 0 ? (
          <p className="history-empty">Aucun calcul effectué</p>
        ) : (
          <div className="history-container">
            <ul className="history-list">
              {history.map((entry, index) => (
                <li key={index} className="history-item">
                  <div className="history-entry">
                    <span className="history-index">{index + 1}.</span>
                    <span className="history-calculation">
                      {entry.a} {entry.operator === '*' ? '×' : entry.operator === '/' ? '÷' : entry.operator} {entry.b} = <strong>{formatResult(entry.result)}</strong>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}